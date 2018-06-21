import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {I18nComponent} from './i18n/i18n.component';
import { AuthGuard } from './_guards/index';
import {AutoComponent} from './auto/auto.component';
import {EventsComponent} from './events/events.component';
import {InputFileComponent} from './demo/components/input-file.component';
import {AtComponent} from './at/at.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {HeroListComponent} from './hero-list/hero-list.component';
import {PagingComponent} from './paging/paging.component';
import {UserinfoComponent} from './userinfo/userinfo.component';
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent},
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'i18n', component: I18nComponent },
    { path: 'AutoComponent', component: AutoComponent },
    { path: 'EventsComponent', component: EventsComponent },
    { path: 'InputFileComponent', component: InputFileComponent },
    { path: 'AtComponent', component: AtComponent},
    { path: 'HeroFormComponent', component: HeroFormComponent},
    { path: 'HeroListComponent', component: HeroListComponent},
    { path: 'PagingComponent', component: PagingComponent},
    { path: 'UserinfoComponent', component: UserinfoComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);