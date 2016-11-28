import { bootstrap } from '@angular/platform-browser-dynamic';

import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component'

import { DemoService } from './home/demo.service'

import { UserService } from './user/user.service'

import { AuthGuard } from './_guards/index';

import { AuthenticationService } from './authenticate/authentication.service';

import { Config } from './config/config'

import { provide, APP_INITIALIZER } from "@angular/core";

import { APP_ROUTER_PROVIDERS } from './app.routing';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    DemoService,
    UserService,
    AuthenticationService,
    AuthGuard,
    Config,
    APP_ROUTER_PROVIDERS,
    { provide: APP_INITIALIZER,
        useFactory: (config: Config) => () => config.load(),
        deps: [Config],
        multi: true }
]).catch(err => console.error(err));


