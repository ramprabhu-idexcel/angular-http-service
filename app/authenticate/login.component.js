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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var user_service_1 = require('../user/user.service');
var LoginComponent = (function () {
    function LoginComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    /*
     * Set user name
     */
    LoginComponent.prototype.onUserName = function (value) {
        this.userName = value;
    };
    /*
     * Set user name
     */
    LoginComponent.prototype.onPassword = function (value) {
        this.password = value;
    };
    /*
     * Submit form
     */
    LoginComponent.prototype.OnSubmit = function () {
        if (this.userName && this.password) {
            this.authenticate();
        }
        else {
        }
    };
    /*
     * Authenticate user
     */
    LoginComponent.prototype.authenticate = function () {
        this.jsonString = JSON.stringify({ "user": { "username": this.userName, "password": this.password } });
        this._userService
            .validateUser(this.jsonString)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/authenticate/login.component.html',
            directives: [forms_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map