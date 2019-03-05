import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
<<<<<<< HEAD
import {AngularMaterialModule} from './angular-material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewIdeaFormpageComponent} from './new-idea-formpage/new-idea-formpage.component';
=======
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';

>>>>>>> feature-toolbar
import {HomePageComponent} from './homepage/home-page.component';
import {NavigationBarComponent} from './navigationbar/navigation-bar.component';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NewIdeaFormpageComponent,
    HomePageComponent
=======
    HomePageComponent,
    NavigationBarComponent
>>>>>>> feature-toolbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    AngularMaterialModule
=======
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
>>>>>>> feature-toolbar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
