"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var demo_service_1 = require('./home/demo.service');
var user_service_1 = require('./user/user.service');
var config_1 = require('./config/config');
var app_routing_1 = require('./app.routing');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    demo_service_1.DemoService,
    user_service_1.UserService,
    config_1.Config,
    app_routing_1.APP_ROUTER_PROVIDERS
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map