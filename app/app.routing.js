"use strict";
var router_1 = require('@angular/router');
var user_component_1 = require('./user/user.component');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./home/about.component');
var user_create_component_1 = require('./user/user-create.component');
exports.routes = [
    { path: 'users',
        component: user_component_1.UserComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'user/create',
        component: user_create_component_1.UserCreateComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routing.js.map