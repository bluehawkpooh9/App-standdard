import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { ToastModule } from  'ng2-toastr/ng2-toastr';
import { SweetAlert2Module } from '../../src/public_api';


// import { NgxSpinnerModule } from 'ngx-spinner';
//i18n
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { I18nComponent } from './i18n/i18n.component';
import { SayHiComponent } from './i18n/say-hi/say-hi.component';
//service
import { AppComponent } from './app.component';
import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';

//form
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService }         from './hero.service';

//event
import { EventsComponent } from './events/events.component';
//autocomplete
import { AutoComponent } from './auto/auto.component';
import {NgAutoCompleteModule} from "./auto/ng-autocomplete/ng-autocomplete.module";
import { NgViewComponent } from './auto/ng-view/ng-view.component';
import { NgHolderComponent } from './auto/ng-holder/ng-holder.component';

//file
import { DropZoneDirective } from './demo/directives/drop-zone.directive';
import { InputFileComponent } from './demo/components/input-file.component';

import { AtComponent } from './at/at.component';
import { DirectiveComponent } from './directive/directive.component';
import { OnewayComponent } from './oneway/oneway.component';

import {PagingComponent} from './paging/paging.component';
import { DataTableModule } from 'angular-4-data-table/src/index';
import { DataTableDemo1Remote } from './paging/data-table-demo1-remote';
 import { HttpComponent } from './http/http.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { MydatepickerComponent } from './mydatepicker/mydatepicker.component';
import { AlertComponent } from './alert/alert.component';
// import { LoadComponent } from './load/load.component';


// import { NgDatepickerModule } from 'ng2-datepicker';
import { ResponsiveModule } from 'ng2-responsive';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
// import { TestComponent } from './test/test.component';
// import { NbThemeModule } from '@nebular/theme';
// import { NgProgressModule  } from 'ngx-progressbar';

// import { MyDatePickerModule } from 'mydatepicker';





export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
 
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeroFormComponent,
    HeroDetailComponent,
    HeroListComponent,
    EventsComponent,
    I18nComponent,
    SayHiComponent,
    AutoComponent,
    NgViewComponent,
    NgHolderComponent,
    DropZoneDirective,
    InputFileComponent,
    AtComponent,
    DirectiveComponent,
    OnewayComponent,
    PagingComponent,
    HttpComponent,
    UserinfoComponent,
    MydatepickerComponent,
    AlertComponent,
    // TestComponent,
   
    // LoadComponent,
  
 



  
   
  

  ],
  imports: [
    AppBoostrapModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule ,
    HttpClientModule, 
    NgAutoCompleteModule,
    DataTableModule,
    // NgxSpinnerModule,
    // NgDatepickerModule,
    ToastModule.forRoot(),
    CollapseModule.forRoot(), 
    BsDropdownModule.forRoot(),
    ResponsiveModule,

    SweetAlert2Module.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent ,
    DropZoneDirective,
        InputFileComponent,
     
  
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    HeroService,
 
  ],
  entryComponents: [ InputFileComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
