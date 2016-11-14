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
var UserCreateComponent = (function () {
    function UserCreateComponent(_userService) {
        this._userService = _userService;
        this.editing = false;
        this.viewUsers = true;
        this.addUser = false;
    }
    /*
     * Submit form
     */
    UserCreateComponent.prototype.OnSubmit = function () {
        var msg = this.Validations();
    };
    /*
     * @Input first name
     */
    UserCreateComponent.prototype.onFirstName = function (value) {
        this.firstName = value;
    };
    /*
     * @Input last name
     */
    UserCreateComponent.prototype.onLastName = function (value) {
        this.lastName = value;
    };
    /*
     * @Input email
     */
    UserCreateComponent.prototype.onEmail = function (value) {
        this.email = value;
    };
    /*
     * Parameter validations
     */
    UserCreateComponent.prototype.Validations = function () {
        /*
         * @Param first Name
         */
        if (this.firstName == '' || this.firstName == undefined) {
            $("#first_name").closest('td').next().html("<div class='error-left'>" + "</div><div class='error-inner'>First name is mandatory.</div>");
            $('#first_name').attr('class', 'inp-form-error');
        }
        else {
            $("#first_name").closest('td').next().html("");
            $('#first_name').attr('class', 'inp-form');
        }
        /*
         * @Param last Name
         */
        if (this.lastName == '' || this.lastName == undefined) {
            $("#last_name").closest('td').next().html("<div class='error-left'>" + "</div><div class='error-inner'>Last name is mandatory.</div>");
            $('#last_name').attr('class', 'inp-form-error');
        }
        else {
            $("#last_name").closest('td').next().html("");
            $('#last_name').attr('class', 'inp-form');
        }
        /*
         * @Param email
         */
        if (this.email == '' || this.email == undefined) {
            $("#email").closest('td').next().html("<div class='error-left'>" + "</div><div class='error-inner'>email is mandatory.</div>");
            $('#email').attr('class', 'inp-form-error');
        }
        else {
            $("#email").closest('td').next().html("");
            $('#email').attr('class', 'inp-form');
        }
    };
    UserCreateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/user/user-create.component.html',
            directives: [forms_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserCreateComponent);
    return UserCreateComponent;
}());
exports.UserCreateComponent = UserCreateComponent;
//# sourceMappingURL=user-create.component.js.map