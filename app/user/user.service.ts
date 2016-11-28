import {Injectable} from '@angular/core';

import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "@angular/http";

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { Config } from 'app/config/config';

@Injectable()

export class UserService {
    private headers;
    private options;
    public apiURL: string;

    constructor(private _http:Http, private _config: Config) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
        /*
         * Backend server Url
         */
        this.apiURL = _config.get('apiUrl');
    }

    /*
     * Get all users
     */
    getUsers() {
      return this._http.get(this.apiURL+"/api/users").map((res:Response) => res.json());
    }
    
    /*
     * Create a new user
     */
    createUser(json) {
        return this._http.post(this.apiURL+'/api/users', json, this.options).map((res:Response) => res.json());
    }

    /*
     * Delete users
     */
    deleteUsers(json){
        return this._http.post(this.apiURL+'/api/users/delete_all', json, this.options).map((res:Response) => res.json());
    }
}


