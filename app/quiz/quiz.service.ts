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
    public apiURL:string;

    constructor(private _http:HttpClient, private _config:Config) {
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
    validate(type, obj, user_id): Observable<boolean> {
        let serviceUrl = this.apiURL+'/api/quizzes/validate';
        let data = JSON.stringify({"quiz": { type: type, obj: obj, user_id: user_id }});
        return this._http.post(serviceUrl, data).map((res:Response) => res.json());
    }

    /*
     * Load quiz questions
     */
    getQuestions(){
        let serviceUrl = this.apiURL+'/api/quizzes/computer';
        return this._http.get(serviceUrl).map((res:Response) => res.json());
    }
}
