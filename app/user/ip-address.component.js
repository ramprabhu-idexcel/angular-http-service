/* http://www.metaltoad.com/blog/angular-2-http-observables */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
// Import and use below directive
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var user_service_1 = require("./user.service");
var ng2_pagination_1 = require("ng2-pagination");
/*
 * Report generate
 */
var csv_report_component_1 = require("../reports/csv-report.component");
var IpAddressComponent = (function () {
    function IpAddressComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        //set pagination value
        this.maxSize = 7;
        this.directionLinks = true;
        this.autoHide = false;
        this.config = {
            id: 'advanced',
            itemsPerPage: 10,
            currentPage: 1
        };
        this.showUsers = true;
    }
    IpAddressComponent.prototype.ngOnInit = function () {
        this.getIpAddress();
    };
    /*
     set list of alerts per page
     */
    IpAddressComponent.prototype.onPageChange = function (number) {
        this.config.currentPage = number;
    };
    /*
     * List of IP Addresses
     */
    IpAddressComponent.prototype.getIpAddress = function () {
        var _this = this;
        $.blockUI();
        this._userService.getIpAddress().subscribe(function (data) { _this.ipaddresses = data; }, function (err) { return console.error(err); }, function () { return $.unblockUI(); });
    };
    /*
     * Download csv reports
     */
    IpAddressComponent.prototype.downloadCSV = function (args) {
        var csvExport = new csv_report_component_1.CsvReportComponent(args, this.ipaddresses);
        return csvExport.downloadCSV();
    };
    /*
     * Download PDF reports
     */
    IpAddressComponent.prototype.downloadPdf = function () {
        $('#content-table').tableExport({ type: 'pdf', escape: 'false' });
    };
    return IpAddressComponent;
}());
IpAddressComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/user/ip-address.component.html',
        pipes: [ng2_pagination_1.PaginatePipe],
        directives: [forms_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp],
        providers: [ng2_pagination_1.PaginationService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], IpAddressComponent);
exports.IpAddressComponent = IpAddressComponent;
//# sourceMappingURL=ip-address.component.js.map