import { provideRouter, RouterConfig } from '@angular/router';

import { UserComponent } from './user/user.component';

import { HomeComponent } from  './home/home.component';

import { AboutComponent } from './home/about.component';

import { UserCreateComponent } from './user/user-create.component';

import { LoginComponent } from './authenticate/login.component';



export const routes: RouterConfig = [
  { path: 'users',
    component: UserComponent 
  },    
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent 
  },
  {
    path: 'user/create',
    component: UserCreateComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];


