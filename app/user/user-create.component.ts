/* http://www.metaltoad.com/blog/angular-2-http-observables */

import { Component } from '@angular/core';
// Import and use below directive
import { FORM_DIRECTIVES } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from './user.service'

@Component({
    templateUrl: 'app/user/user-create.component.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class UserCreateComponent{
    constructor(private _userService: UserService) { }
    public users: Array<any>;
    public editing: boolean = false;
    public viewUsers : boolean = true;
    public addUser: boolean = false;
    private firstName: string;
    private lastName: string;
    private email: string;

    /*
     * Submit form
     */
    OnSubmit() {
        var msg = this.Validations();

    }

    /*
     * @Input first name
     */
    onFirstName(value){
        this.firstName = value;
    }

    /*
     * @Input last name
     */
    onLastName(value){
        this.lastName = value;
    }

    /*
     * @Input email
     */
    onEmail(value){
        this.email = value;
    }

    /*
     * Parameter validations
     */
    Validations(){
        /*
         * @Param first Name
         */
        if(this.firstName == '' || this.firstName == undefined){
            $("#first_name").closest('td').next().html("<div class='error-left'>" + "</div><div class='error-inner'>First name is mandatory.</div>");
            $('#first_name').attr('class', 'inp-form-error');
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
        }
        else{
            $("#email").closest('td').next().html("");
            $('#email').attr('class', 'inp-form');
        }
    }

}
