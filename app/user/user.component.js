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
var sorter_1 = require("../sorting/sorter");
var current_records_1 = require("../sorting/current.records");
var order_by_1 = require("app/sorting/order.by");
/*
 * Report generate
 */
var csv_report_component_1 = require("../reports/csv-report.component");
var UserComponent = (function () {
    function UserComponent(_userService) {
        this._userService = _userService;
        this.showUsers = true;
        this.editing = false;
        this.viewUsers = true;
        this.addUser = false;
        //set pagination value
        this.maxSize = 7;
        this.directionLinks = true;
        this.autoHide = false;
        this.config = {
            id: 'advanced',
            itemsPerPage: 10,
            currentPage: 1
        };
        this.user_ids = [];
        this.messageBlue = false;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.Name = currentUser && currentUser.name;
        this.sorter = new sorter_1.Sorter();
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    /*
     * Sort records
     */
    UserComponent.prototype.sort = function (key) {
        var currentUsers = this.currentRecords();
        this.sorter.sort(key, currentUsers);
    };
    /*
     set list of alerts per page
     */
    UserComponent.prototype.onPageChange = function (number) {
        this.config.currentPage = number;
    };
    /*
     * Collect users
     */
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        $.blockUI();
        this._userService.getUsers().subscribe(function (data) { _this.users = data; }, function (err) { return console.error(err); }, function () { return $.unblockUI(); });
    };
    /*
     * Delete users
     */
    UserComponent.prototype.deleteUsers = function () {
        var _this = this;
        if (this.user_ids.length != 0) {
            var result = confirm("Are you sure want to delete?");
            if (result) {
                $.blockUI();
                var json = JSON.stringify({ user_ids: this.user_ids });
                this._userService.deleteUsers(json).subscribe(function (data) { _this.users = data; }, function (err) { return console.error(err); }, function () { return $.unblockUI(); });
                this.messageBlue = false;
            }
        }
        else {
            this.messageBlue = true;
        }
    };
    /*
     * Delete single user
     */
    UserComponent.prototype.deleteUser = function (id) {
        var _this = this;
        var result = confirm("Are you sure want to delete?");
        if (result) {
            $.blockUI();
            var json = JSON.stringify({ user_ids: id });
            this._userService.deleteUsers(json).subscribe(function (data) { _this.users = data; }, function (err) { return console.error(err); }, function () { return $.unblockUI(); });
        }
    };
    /*
     * Select/Unselect users from the list
     */
    UserComponent.prototype.onChange = function (userId, flag) {
        if (flag) {
            this.user_ids.push(userId);
        }
        else {
            var index = this.user_ids.indexOf(userId);
            if (index > -1) {
                this.user_ids.splice(index, 1);
            }
        }
        return this.user_ids;
    };
    /*
     * Select all users
     */
    UserComponent.prototype.toggleAll = function (event) {
        var _this = this;
        var currentUsers = this.currentRecords();
        if (event == true) {
            currentUsers.forEach(function (user) {
                user.user_id = true;
                _this.onChange(user.id, true);
            });
        }
        else {
            currentUsers.forEach(function (user) {
                user.user_id = false;
                _this.onChange(user.id, false);
            });
        }
    };
    /*
     * list of current records
     */
    UserComponent.prototype.currentRecords = function () {
        var currentRecords = new current_records_1.CurrentRecords(this.config.currentPage, this.config.itemsPerPage, this.users);
        return currentRecords.count();
    };
    /*
     * Download csv reports
     */
    UserComponent.prototype.downloadCSV = function (args) {
        var csvExport = new csv_report_component_1.CsvReportComponent(args, this.users);
        return csvExport.downloadCSV();
    };
    /*
     * Download PDF reports
     */
    UserComponent.prototype.downloadPdf = function () {
        $('#content-table').tableExport({ type: 'pdf', escape: 'false' });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/user/user.component.html',
        pipes: [ng2_pagination_1.PaginatePipe, order_by_1.OrderBy],
        directives: [forms_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp],
        providers: [ng2_pagination_1.PaginationService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map