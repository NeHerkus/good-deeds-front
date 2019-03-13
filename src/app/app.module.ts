// angular imports
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularMaterialModule} from './angular-material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// dev imports
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewIdeaFormpageComponent} from './newideaformpage/new-idea-formpage.component';
import {HomePageComponent} from './homepage/home-page.component';
import {NavigationBarComponent} from './navigationbar/navigation-bar.component';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';
import {IdeasTableComponent} from './ideastable/ideas-table.component';
import {IdeaService} from './services/idea.service';
<<<<<<< HEAD
import {AuthenticationService} from './services/authentication.service';
import {NewUserFormpageComponent} from './newuserformpage/new-user-formpage.component';
=======
import {AlertComponent} from './alert/alert.component';
import {AlertService} from './services/alert.service';

>>>>>>> 2037fe0... Add alert service and component for login

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
<<<<<<< HEAD
    NewUserFormpageComponent
=======
    AlertComponent,
    AlertService
>>>>>>> 2037fe0... Add alert service and component for login
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

  providers: [IdeaService, AuthenticationService],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
