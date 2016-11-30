import {Injectable} from '@angular/core';
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Config } from 'app/config/config';
/*
 * Http client
 */
import { HttpClient } from 'app/config/http-client';

@Injectable()

export class UserService {
    public apiURL: string;

    constructor(private _http:HttpClient, private _config: Config) {
        /*
         * Backend server Url
         */
        this.apiURL = _config.get('apiUrl');
    }

    /*
     * Get all users
     */
    getUsers() {
        let serviceUrl = this.apiURL+"/api/users";
        return this._http.get(serviceUrl).map((res:Response) => res.json());
    }
    
    /*
     * Create a new user
     */
    createUser(json) {
        let serviceUrl = this.apiURL+'/api/users';
        return this._http.post(serviceUrl, json).map((res:Response) => res.json());
    }

    /*
     * Delete users
     */
    deleteUsers(json){
        let serviceUrl = this.apiURL+'/api/users/delete_all';
        return this._http.post(serviceUrl, json).map((res:Response) => res.json());
    }
}


