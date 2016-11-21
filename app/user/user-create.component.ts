/* http://www.metaltoad.com/blog/angular-2-http-observables */

import { Component } from '@angular/core';
// Import and use below directive
import { FORM_DIRECTIVES } from '@angular/forms';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { UserService } from './user.service'

@Component({
    templateUrl: 'app/user/user-create.component.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class UserCreateComponent{
    constructor(private _userService: UserService, private _router:Router) { }
    public users: Array<any>;
    public editing: boolean = false;
    public viewUsers : boolean = true;
    public addUser: boolean = false;
    /*
     * @Input params
     */
    private userName: string;
    private password: string;
    private confirmPassword: string;
    private firstName: string;
    private lastName: string;
    private email: string;
    private age: string;
    private address: string;
    private phone: string;
    private jsonString;

    /*
     * Submit form
     */
    OnSubmit() {
        var msg = this.Validations();
        if(msg == ''){
            $.blockUI({ message: "<h2>Please wait...</h2>" });
            this.jsonString = JSON.stringify({ "user": { "username": this.userName,
                "password":this.password,
                "password_confirmation": this.confirmPassword,
                "first_name": this.firstName,
                "last_name": this.lastName,
                "email":this.email,
                "age": this.age,
                "address": this.address,
                "phone": this.phone }});
            this._userService
                .createUser(this.jsonString)
                .subscribe(response => this.successResponse(response),
                    error => this.failureResponse(error.json()),
                    () => $.unblockUI());
        }
    }

    /*
     * @Input params
     */
    SetAttributes(value, paramType){
        switch (paramType) {
            case 'user_name':
                this.userName = value;
                break;
            case 'password':
                this.password = value;
                break;
            case 'confirm_password':
                this.confirmPassword = value;
                break;
            case 'first_name':
                this.firstName = value;
                break;
            case 'last_name':
                this.lastName = value;
                break;
            case 'email':
                this.email = value;
                break;
            case 'age':
                this.age = value;
                break;
            case 'address':
                this.address = value;
                break;
            case 'phone':
                this.phone = value;
                break;
        }
    }

    /*
     * Failure response
     */
    failureResponse(errorContent){
        $.unblockUI();
        /*
         * User name uniqueness validation
         */
        if(errorContent && errorContent.username){
            var errorMsg = "User name "+errorContent.username[0];
            $("#user_name").closest('td').next().html("<div class='error-left'>" + "</div><div class='error-inner'>" + errorMsg +"</div>");
            $('#user_name').attr('class', 'inp-form-error');
        }
        else{
            $("#user_name").closest('td').next().html("");
            $('#user_name').attr('class', 'inp-form');
        }

        /*
         * Email uniqueness validation
         */
        if(errorContent && errorContent.email){
            var errorMsg = "Email "+errorContent.email[0];
            $("#email").closest('td').next().html("<div class='error-left'>" + "</div><div class='error-inner'>" + errorMsg +"</div>");
            $('#email').attr('class', 'inp-form-error');
        }
        else{
            $("#email").closest('td').next().html("");
            $('#email').attr('class', 'inp-form');
        }
    }

    /*
     * Success response
     */
    successResponse(response){
        this._router.navigate(['/users']);
    }

    /*
     * Parameter validations
     */
    Validations(){
        var errorMessage = '';
        var errorCount = [];
        /*
         * @Param user Name
         */
        if(this.userName == '' || this.userName == undefined){
            $("#user_name").closest('td').next().html("<div class='error-left'>" + "</div><div class='error-inner'>User name is mandatory.</div>");
            $('#user_name').attr('class', 'inp-form-error');
            errorCount.push(true);
        }
        else{
            $("#user_name").closest('td').next().html("");
            $('#user_name').attr('class', 'inp-form');
        }

        /*
         * @Param password
         */
        if(this.password == '' || this.password == undefined){
            $("#password").closest('td').next().html("<div class='error-left'>" + "</div><div class='error-inner'>Password is mandatory.</div>");
            $('#password').attr('class', 'inp-form-error');
            errorCount.push(true);
        }
        else{
            $("#password").closest('td').next().html("");
            $('#password').attr('class', 'inp-form');
        }

        /*
         * @Param confirm password
         */
        if(this.confirmPassword == '' || this.confirmPassword == undefined){
            $("#confirm_password").closest('td').next().html("<div class='error-left'>" + "</div><div class='error-inner'>Confirm Password is mandatory.</div>");
            $('#confirm_password').attr('class', 'inp-form-error');
            errorCount.push(true);
        }
        else{
            $("#confirm_password").closest('td').next().html("");
            $('#confirm_password').attr('class', 'inp-form');
        }

        /*
         * Password & Confirm password should be same Password
         */
        if(this.password && this.confirmPassword){
            if(this.password != this.confirmPassword){
                $("#password").closest('td').next().html("<div class='error-left'>" + "</div><div class='error-inner'>Password & Confirm Password should be same.</div>");
                $('#password').attr('class', 'inp-form-error');
                $('#confirm_password').attr('class', 'inp-form-error');
                errorCount.push(true);
            }
            else{
                $("#password").closest('td').next().html("");
                $('#password').attr('class', 'inp-form');
                $('#confirm_password').attr('class', 'inp-form');
            }
        }


        /*
         * @Param first Name
         */
        if(this.firstName == '' || this.firstName == undefined){
            $("#first_name").closest('td').next().html("<div class='error-left'>" + "</div><div class='error-inner'>First name is mandatory.</div>");
            $('#first_name').attr('class', 'inp-form-error');
            errorCount.push(true);
        }
        else{
            $("#first_name").closest('td').next().html("");
            $('#first_name').attr('class', 'inp-form');
        }

        /*
         * @Param last Name
         */
        if(this.lastName == '' || this.lastName == undefined){
            $("#last_name").closest('td').next().html("<div class='error-left'>" + "</div><div class='error-inner'>Last name is mandatory.</div>");
            $('#last_name').attr('class', 'inp-form-error');
            errorCount.push(true);
        }
        else{
            $("#last_name").closest('td').next().html("");
            $('#last_name').attr('class', 'inp-form');
        }

        /*
         * @Param email
         */
        if(this.email == '' || this.email == undefined){
            $("#email").closest('td').next().html("<div class='error-left'>" + "</div><div class='error-inner'>email is mandatory.</div>");
            $('#email').attr('class', 'inp-form-error');
            errorCount.push(true);
        }
        else{
            $("#email").closest('td').next().html("");
            $('#email').attr('class', 'inp-form');
        }

        /*
         * @Param age
         */
        if(this.age == '' || this.age == undefined){
            $("#age").closest('td').next().html("<div class='error-left'>" + "</div><div class='error-inner'>age is mandatory.</div>");
            $('#age').attr('class', 'inp-form-error');
            errorCount.push(true);
        }
        else{
            $("#age").closest('td').next().html("");
            $('#age').attr('class', 'inp-form');
        }

        /*
         * @Param phone
         */
        if(this.phone == '' || this.phone == undefined){
            $("#phone").closest('td').next().html("<div class='error-left'>" + "</div><div class='error-inner'>phone is mandatory.</div>");
            $('#phone').attr('class', 'inp-form-error');
            errorCount.push(true);
        }
        else{
            $("#phone").closest('td').next().html("");
            $('#phone').attr('class', 'inp-form');
        }

        if(errorCount.length >=1){
            errorMessage = "Error is found";
        }
        return errorMessage;
    }

}
