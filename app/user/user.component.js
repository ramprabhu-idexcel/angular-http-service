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
var core_1 = require('@angular/core');
// Import and use below directive
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var UserComponent = (function () {
    function UserComponent(_userService) {
        this._userService = _userService;
        this.editing = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getUsers().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.users = _this.findUsers(data); }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log(_this.users); });
    };
    UserComponent.prototype.findUsers = function (data) {
        this.users = data;
        return this.users;
    };
    UserComponent.prototype.userLists = function () {
        return this.users;
    };
    UserComponent.prototype.editUser = function (user) {
        this.editing = true;
        console.log(user);
    };
    UserComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/user/user.component.html',
            directives: [forms_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map