/* http://www.metaltoad.com/blog/angular-2-http-observables */

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

// Import and use below directive
import { FORM_DIRECTIVES } from '@angular/forms';

import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({   
    templateUrl: 'app/home/about.component.html',        
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class AboutComponent implements OnInit{

	ngOnInit(){

	}

}
