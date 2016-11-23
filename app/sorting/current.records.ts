export class CurrentRecords{
    currentPage:number;
    itemsPerPage: number;
    totalItems: Array<any>;

    constructor(current_page, items_per_page, total_items){
        this.currentPage = current_page;
        this.itemsPerPage = items_per_page;
        this.totalItems = total_items;
    }

    /*
     * Count of current records
     */
    count(){
        return this.totalItems.slice((this.currentPage - 1) *
            this.itemsPerPage, this.currentPage * this.itemsPerPage);
    }

}
