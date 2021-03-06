import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularMaterialModule} from './angular-material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewIdeaFormpageComponent} from './newideaformpage/new-idea-formpage.component';
import {HomePageComponent} from './homepage/home-page.component';
import {NavigationBarComponent} from './navigationbar/navigation-bar.component';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';
import {IdeasTableComponent} from './ideastable/ideas-table.component';
import {IdeaService} from './services/idea.service';
import {AuthenticationInterceptorService} from './services/authentication-interceptor.service';
import {NewUserFormpageComponent} from './newuserformpage/new-user-formpage.component';
import {PageNotFoundComponent} from './pagenotfound/page-not-found.component';
import {AlertComponent} from './alert/alert.component';
import {AlertService} from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    NewIdeaFormpageComponent,
    HomePageComponent,
    NavigationBarComponent,
    IdeasTableComponent,
    NewIdeaFormpageComponent,
    HomePageComponent,
    NavigationBarComponent,
    NewUserFormpageComponent,
    PageNotFoundComponent,
    AlertComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [IdeaService, AuthenticationInterceptorService, AlertService],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
