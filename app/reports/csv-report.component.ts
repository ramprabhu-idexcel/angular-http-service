/*
 * Created by Ramprabu Narayanasamy
 * Data: November 30, 2016
 * SSO: 206503515
 */
export class CsvReportComponent {
    private stockData: Array;
    private args;

    constructor(private _args, private _stockData){
        this.args = _args;
        this.stockData = _stockData;
    }

    /*
     * export csv
     */
    convertArrayOfObjectsToCSV(args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });
        return result;
    }

    /*
     * Method to download csv
     */
    downloadCSV() {
        var data, filename, link;
        var csv = this.convertArrayOfObjectsToCSV({
            data: this.stockData
        });
        if (csv == null) return;

        filename = this.args.filename || 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}