/* http://www.metaltoad.com/blog/angular-2-http-observables */


import { Component } from '@angular/core';

import { DemoService } from './demo.service';

import { Observable } from 'rxjs/Rx';

// Import and use below directive
import { FORM_DIRECTIVES } from '@angular/forms';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { Config } from '../config/config'

import 'rxjs/add/operator/map';

@Component({   
    templateUrl: 'app/home/home.component.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class HomeComponent {
    public foods;
    public books;
    public movies;   

    public food_name;
    public message;

    constructor(private _demoService: DemoService, private config: Config) {        
        //var url = _config.get('apiUrl')  
        var url =   config.get('server');
        console.log("33333333333333333");  
        console.log(url);                     
    }

    ngOnInit(){
      this.getFoods();
      this.getBooksMovies();      
    }

   
    getFoods() {
      this._demoService.getFoods().subscribe(
          // the first argument is a function which runs on success
              data => { this.foods = data },
          // the second argument is a function which runs on error
              err => console.error(err),
          // the third argument is a function which runs on completion
          () => console.log('done loading foods')
      );      
    }

    getBooksMovies(){
      this._demoService.getBooksMovies().subscribe(
        data => {
        this.books = data[0]
        this.movies = data[1]
      }
      );
    }

    createFood(food_name){
      this._demoService.createFood(food_name).subscribe(
        data => { this.message = data },
        err => console.error(err)
      );
    }
}


