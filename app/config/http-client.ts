import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class HttpClient {
    private options: {};

    constructor(private http: Http) {
        // Api headers
        this.createAuthorizationHeader();
    }

    /*
     * attach authorization header
     */
    createAuthorizationHeader() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Basic ' + btoa('ram:Passw00rd'));
        this.options = new RequestOptions({ headers: headers });
    }

    /*
     * Http get request
     */
    get(url) {
        return this.http.get(url, this.options);
    }

    /*
     * Http post request
     */
    post(url, data) {
        return this.http.post(url, data, this.options);
    }
}

