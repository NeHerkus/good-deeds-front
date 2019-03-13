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
import {AuthenticationService} from './services/authentication.service';
import {NewUserFormpageComponent} from './newuserformpage/new-user-formpage.component';
import {PageNotFoundComponent} from './pagenotfound/page-not-found.component';
import {JwtModule} from '@auth0/angular-jwt';

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
    PageNotFoundComponent
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
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:4200', 'https://good-deeds-front-staging.herokuapp.com/'],
      }
    })
  ],

  providers: [IdeaService, AuthenticationService],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
