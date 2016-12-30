/* http://www.metaltoad.com/blog/angular-2-http-observables */

import { Component, OnInit } from '@angular/core';
// Import and use below directive
import { FORM_DIRECTIVES } from '@angular/forms';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { UserService } from './user.service';
import { PaginatePipe, PaginationControlsCmp, PaginationService, IPaginationInstance } from 'ng2-pagination';
/*
 * Report generate
 */
import { CsvReportComponent } from '../reports/csv-report.component';

@Component({
    templateUrl: 'app/user/ip-address.component.html',
    pipes: [PaginatePipe],
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, PaginationControlsCmp],
    providers: [PaginationService]
})

export class IpAddressComponent implements OnInit{
    constructor(private _userService: UserService, private _router:Router) { }
    public ipaddresses: Array<any>;

    //set pagination value
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: IPaginationInstance = {
        id: 'advanced',
        itemsPerPage: 10,
        currentPage: 1
    };

    public showUsers: boolean = true;

    ngOnInit(){
        this.getIpAddress();
    }

    /*
     set list of alerts per page
     */
    onPageChange(number: number) {
        this.config.currentPage = number;
    }

    /*
     * List of IP Addresses
     */
    getIpAddress(){
        $.blockUI();
        this._userService.getIpAddress().subscribe(
                data => { this.ipaddresses = data },
                err => console.error(err),
            () => $.unblockUI()
        );
    }

    /*
     * Download csv reports
     */
    downloadCSV(args) {
        let csvExport = new CsvReportComponent(args,this.ipaddresses);
        return csvExport.downloadCSV();
    }

    /*
     * Download PDF reports
     */
    downloadPdf(){
        $('#content-table').tableExport({type:'pdf',escape:'false'});
    }

}
