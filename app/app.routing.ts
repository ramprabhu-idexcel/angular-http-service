import { provideRouter, RouterConfig } from '@angular/router';

import { UserComponent } from './user/user.component';

import { HomeComponent } from  './home/home.component';

import { AboutComponent } from './home/about.component';



export const routes: RouterConfig = [
  { path: 'user', 
    component: UserComponent 
  },    
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent 
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];


