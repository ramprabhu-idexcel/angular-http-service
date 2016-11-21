/* http://www.metaltoad.com/blog/angular-2-http-observables */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FORM_DIRECTIVES } from '@angular/forms';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
    templateUrl: 'app/authenticate/login.component.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class LoginComponent implements OnInit{
    constructor(private _authService: AuthenticationService, private _router:Router) { }
    private userName: string;
    private password: string;
    loading = false;
    error = '';

    ngOnInit() {
        // reset login status
        this._authService.logout();
    }

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
            this.login();
        }
        else{
            this.error = 'Username or password is incorrect';
        }
    }

    /*
     * Authenticate user
     */
    login() {
        this.loading = true;
        this._authService.login(this.userName, this.password)
            .subscribe(result => {
                if (result === true) {
                    this._router.navigate(['/users']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }

    /*
     * Press enter to submit button
     */
    keyDownFunction(event) {
        if(event.keyCode == 13) {
            this.OnSubmit();
        }
    }
}
