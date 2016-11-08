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

    getBooksMovies() {
      var data = Observable.forkJoin(
          this.http.get('/app/books.json').map((res:Response) => res.json()),
          this.http.get('/app/movies.json').map((res:Response) => res.json())
      );
      return data;
    }

    createFood(food) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let body = JSON.stringify({name: food});
      //var creds = "username=" + "ram" + "&password=" + "prabhu";
      // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
      return this.http.post('http://localhost:4000/api/food/', body, headers).map((res:Response) => res.json());
    }

}


