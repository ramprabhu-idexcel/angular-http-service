import { Component } from '@angular/core';

import { DemoService } from './demo.service';

import { Observable } from 'rxjs/Rx';

// Import and use below directive
import { FORM_DIRECTIVES } from '@angular/forms';

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    directives: [FORM_DIRECTIVES]
})

export class AppComponent {
    public foods;
    public books;
    public movies;

    public food_name;

    constructor(private _demoService: DemoService) { }

    ngOnInit() {
        this.getFoods();
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

}