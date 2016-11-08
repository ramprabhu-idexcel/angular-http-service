/* http://www.metaltoad.com/blog/angular-2-http-observables */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var demo_service_1 = require('./demo.service');
// Import and use below directive
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var config_1 = require('../config/config');
require('rxjs/add/operator/map');
var HomeComponent = (function () {
    function HomeComponent(_demoService, config) {
        this._demoService = _demoService;
        this.config = config;
        //var url = _config.get('apiUrl')  
        var url = config.get('server');
        console.log("33333333333333333");
        console.log(url);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getFoods();
        this.getBooksMovies();
    };
    HomeComponent.prototype.getFoods = function () {
        var _this = this;
        this._demoService.getFoods().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.foods = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log('done loading foods'); });
    };
    HomeComponent.prototype.getBooksMovies = function () {
        var _this = this;
        this._demoService.getBooksMovies().subscribe(function (data) {
            _this.books = data[0];
            _this.movies = data[1];
        });
    };
    HomeComponent.prototype.createFood = function (food_name) {
        var _this = this;
        this._demoService.createFood(food_name).subscribe(function (data) { _this.message = data; }, function (err) { return console.error(err); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/home/home.component.html',
            directives: [forms_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [demo_service_1.DemoService, config_1.Config])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map