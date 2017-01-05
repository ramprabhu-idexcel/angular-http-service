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
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var config_1 = require("app/config/config");
/*
 * Http client
 */
var http_client_1 = require("app/config/http-client");
var AuthenticationService = (function () {
    function AuthenticationService(_http, _config) {
        this._http = _http;
        this._config = _config;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        /*
         * Backend server Url
         */
        this.apiURL = _config.get('apiUrl');
    }
    /*
     * create user session
     */
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var serviceUrl = this.apiURL + '/api/users/authenticate';
        var data = JSON.stringify({ "user": { username: username, password: password } });
        return this._http.post(serviceUrl, data)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            var user_id = response.json() && response.json().user_id;
            var name = response.json() && response.json().name;
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token, user_id: user_id, name: name }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    /*
     * kill user session
     */
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    /*
     * Url Hit Count
     */
    AuthenticationService.prototype.getHitCount = function () {
        var _this = this;
        var serviceUrl = this.apiURL + "/api/hit-count";
        return Observable_1.Observable.interval(60000)
            .flatMap(function () { return _this._http.get(serviceUrl); });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_client_1.HttpClient !== "undefined" && http_client_1.HttpClient) === "function" && _a || Object, typeof (_b = typeof config_1.Config !== "undefined" && config_1.Config) === "function" && _b || Object])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
var _a, _b;
//# sourceMappingURL=authentication.service.js.map