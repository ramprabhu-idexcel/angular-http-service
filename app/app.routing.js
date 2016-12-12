"use strict";
var router_1 = require("@angular/router");
var user_component_1 = require("./user/user.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./home/about.component");
var user_create_component_1 = require("./user/user-create.component");
var login_component_1 = require("./authenticate/login.component");
var index_1 = require("./_guards/index");
var quiz_component_1 = require("./quiz/quiz.component");
var ip_address_component_1 = require("./user/ip-address.component");
exports.routes = [
    { path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: 'users',
        component: user_component_1.UserComponent,
        canActivate: [index_1.AuthGuard]
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        canActivate: [index_1.AuthGuard]
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
        canActivate: [index_1.AuthGuard]
    },
    {
        path: 'user/create',
        component: user_create_component_1.UserCreateComponent,
        canActivate: [index_1.AuthGuard]
    },
    { path: 'quiz',
        component: quiz_component_1.QuizComponent,
        canActivate: [index_1.AuthGuard]
    },
    {
        path: 'ipaddress',
        component: ip_address_component_1.IpAddressComponent,
        canActivate: [index_1.AuthGuard]
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routing.js.map