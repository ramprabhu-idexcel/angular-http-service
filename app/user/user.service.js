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
require("rxjs/add/operator/map");
var config_1 = require("app/config/config");
/*
 * Http client
 */
var http_client_1 = require("app/config/http-client");
var UserService = (function () {
    function UserService(_http, _config) {
        this._http = _http;
        this._config = _config;
        /*
         * Backend server Url
         */
        this.apiURL = _config.get('apiUrl');
    }
    /*
     * Get all users
     */
    UserService.prototype.getUsers = function () {
        var serviceUrl = this.apiURL + "/api/users";
        return this._http.get(serviceUrl).map(function (res) { return res.json(); });
    };
    /*
     * Create a new user
     */
    UserService.prototype.createUser = function (json) {
        var serviceUrl = this.apiURL + '/api/users';
        return this._http.post(serviceUrl, json).map(function (res) { return res.json(); });
    };
    /*
     * Delete users
     */
    UserService.prototype.deleteUsers = function (json) {
        var serviceUrl = this.apiURL + '/api/users/delete_all';
        return this._http.post(serviceUrl, json).map(function (res) { return res.json(); });
    };
    /*
     * Users Ip Addresses
     */
    UserService.prototype.getIpAddress = function () {
        var serviceUrl = this.apiURL + '/api/ipaddress/list';
        return this._http.get(serviceUrl).map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_client_1.HttpClient !== "undefined" && http_client_1.HttpClient) === "function" && _a || Object, typeof (_b = typeof config_1.Config !== "undefined" && config_1.Config) === "function" && _b || Object])
], UserService);
exports.UserService = UserService;
var _a, _b;
//# sourceMappingURL=user.service.js.map