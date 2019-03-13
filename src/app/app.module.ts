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
<<<<<<< HEAD
import {AuthenticationService} from './services/authentication.service';
import {NewUserFormpageComponent} from './newuserformpage/new-user-formpage.component';
=======
=======
>>>>>>> 9cd5d76379ce1b67366ab69898738b9b0da2a174
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
<<<<<<< HEAD
<<<<<<< HEAD
    NewUserFormpageComponent
=======
    AlertComponent,
    AlertService
>>>>>>> 2037fe0... Add alert service and component for login
=======
    AlertComponent
>>>>>>> 9364d64... Fix app module providers after creating Alert service
=======
    AlertComponent
>>>>>>> 9cd5d76379ce1b67366ab69898738b9b0da2a174
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

<<<<<<< HEAD
<<<<<<< HEAD
  providers: [IdeaService, AuthenticationService],
=======
  providers: [IdeaService, AlertService],
>>>>>>> 9364d64... Fix app module providers after creating Alert service
=======
  providers: [IdeaService, AlertService],
>>>>>>> 9cd5d76379ce1b67366ab69898738b9b0da2a174
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
