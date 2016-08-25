import {Injectable} from '@angular/core';

import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "@angular/http";

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()

export class DemoService {
    constructor(private http:Http) {
    }

    // Uses http.get() to load a single JSON file
    getFoods() {
        return this.http.get('/app/food.json').map((res:Response) => res.json());
    }

}