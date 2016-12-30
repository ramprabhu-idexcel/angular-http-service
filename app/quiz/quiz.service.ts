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
export class QuizService {
    public token:string;
    public user_id: string;
    public apiURL:string;

    constructor(private _http:HttpClient, private _config:Config) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.user_id = currentUser && currentUser.user_id;

        /*
         * Backend server Url
         */
        this.apiURL = _config.get('apiUrl');
    }

    /*
     * create user session
     */
    validate(type, obj): Observable<boolean> {
        let serviceUrl = this.apiURL+'/api/quizzes/validate';
        let data = JSON.stringify({"quiz": { type: type, obj: obj, user_id: this.user_id }});
        return this._http.post(serviceUrl, data).map((res:Response) => res.json());
    }
}
