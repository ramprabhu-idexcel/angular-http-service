"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var demo_service_1 = require("./home/demo.service");
var user_service_1 = require("./user/user.service");
var index_1 = require("./_guards/index");
var authentication_service_1 = require("./authenticate/authentication.service");
var quiz_service_1 = require("./quiz/quiz.service");
var config_1 = require("./config/config");
var http_client_1 = require("app/config/http-client");
var core_1 = require("@angular/core");
var app_routing_1 = require("./app.routing");
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    demo_service_1.DemoService,
    user_service_1.UserService,
    authentication_service_1.AuthenticationService,
    quiz_service_1.QuizService,
    index_1.AuthGuard,
    config_1.Config,
    http_client_1.HttpClient,
    app_routing_1.APP_ROUTER_PROVIDERS,
    { provide: core_1.APP_INITIALIZER,
        useFactory: function (config) { return function () { return config.load(); }; },
        deps: [config_1.Config],
        multi: true }
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map