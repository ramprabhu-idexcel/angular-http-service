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
var http_1 = require("@angular/http");
var Config = (function () {
    function Config(http) {
        this.http = http;
        this.Env = "development";
    }
    /*
     * Load configuration files
     */
    Config.prototype.load = function () {
        var _this = this;
        this.http.get("app/config/" + this.Env + ".json")
            .map(function (response) { return response.json(); })
            .subscribe(function (result) { return _this._config = result; });
        return Promise.resolve(this._config);
    };
    /*
     * Get the details of configuration key
     */
    Config.prototype.get = function (key) {
        return this._config[key];
    };
    return Config;
}());
Config = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Config);
exports.Config = Config;
//# sourceMappingURL=config.js.map