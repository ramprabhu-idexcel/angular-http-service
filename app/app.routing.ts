import { provideRouter, RouterConfig } from '@angular/router';

import { UserComponent } from './user/user.component';

import { HomeComponent } from  './home/home.component';

import { AboutComponent } from './home/about.component';

import { UserCreateComponent } from './user/user-create.component';

import { LoginComponent } from './authenticate/login.component';

import { AuthGuard } from './_guards/index';

import { QuizComponent } from './quiz/quiz.component';


export const routes: RouterConfig = [
  { path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'users',
    component: UserComponent,
    canActivate: [AuthGuard]
  },    
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/create',
    component: UserCreateComponent,
    canActivate: [AuthGuard]
  },
  { path: 'quiz',
    component: QuizComponent,
    canActivate: [AuthGuard]
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];


