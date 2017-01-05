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
var QuizService = (function () {
    function QuizService(_http, _config) {
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
    QuizService.prototype.validate = function (type, obj, user_id) {
        var serviceUrl = this.apiURL + '/api/quizzes/validate';
        var data = JSON.stringify({ "quiz": { type: type, obj: obj, user_id: user_id } });
        return this._http.post(serviceUrl, data).map(function (res) { return res.json(); });
    };
    /*
     * Load quiz questions
     */
    QuizService.prototype.getQuestions = function () {
        var serviceUrl = this.apiURL + '/api/quizzes/computer';
        return this._http.get(serviceUrl).map(function (res) { return res.json(); });
    };
    return QuizService;
}());
QuizService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_client_1.HttpClient !== "undefined" && http_client_1.HttpClient) === "function" && _a || Object, typeof (_b = typeof config_1.Config !== "undefined" && config_1.Config) === "function" && _b || Object])
], QuizService);
exports.QuizService = QuizService;
var _a, _b;
//# sourceMappingURL=quiz.service.js.map