import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Config } from 'app/config/config';
/*
 * Http client
 */
import { HttpClient } from 'app/config/http-client';


@Injectable()
export class AuthenticationService {
    public token: string;
    public apiURL: string;

    constructor(private _http: HttpClient, private _config: Config) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        /*
         * Backend server Url
         */
        this.apiURL = _config.get('apiUrl');
    }

    /*
     * create user session
     */
    login(username, password): Observable<boolean> {
        let serviceUrl = this.apiURL+'/api/users/authenticate';
        let data = JSON.stringify({"user": { username: username, password: password }});
        return this._http.post(serviceUrl, data)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                let user_id = response.json() && response.json().user_id;
                let name = response.json() && response.json().name;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token, user_id: user_id, name: name}));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    /*
     * kill user session
     */
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    /*
     * Url Hit Count
     */
    getHitCount(): Observable{
        let serviceUrl = this.apiURL+"/api/hit-count";
        return Observable.interval(60000)
            .flatMap(() => this._http.get(serviceUrl));
    }
}