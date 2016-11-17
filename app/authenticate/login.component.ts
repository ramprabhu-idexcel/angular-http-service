/* http://www.metaltoad.com/blog/angular-2-http-observables */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FORM_DIRECTIVES } from '@angular/forms';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { UserService } from '../user/user.service'

@Component({
    templateUrl: 'app/authenticate/login.component.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class LoginComponent implements OnInit{
    constructor(private _userService: UserService, private _router:Router) { }
    private userName: string;
    private password: string;
    private jsonString;

    /*
     * Set user name
     */
    onUserName(value){
        this.userName = value;
    }

    /*
     * Set user name
     */
    onPassword(value){
        this.password = value;
    }

    /*
     * Submit form
     */
    OnSubmit() {
        if(this.userName && this.password){
            this.authenticate();
        }
        else{

        }
    }

    /*
     * Authenticate user
     */
    authenticate(){
        this.jsonString = JSON.stringify({ "user": { "username": this.userName, "password": this.password }});
        this._userService
            .validateUser(this.jsonString)
            .subscribe(response => console.log(response),
                error => console.log(error)
            );
    }

}
