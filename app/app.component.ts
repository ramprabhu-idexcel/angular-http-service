/* http://www.metaltoad.com/blog/angular-2-http-observables */

import { Component } from '@angular/core';

// Import and use below directive
import { FORM_DIRECTIVES } from '@angular/forms';

import { ROUTER_DIRECTIVES } from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class AppComponent {

}