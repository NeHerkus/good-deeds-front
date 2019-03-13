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
import {NewIdeaFormPageComponent} from './newideaformpage/new-idea-form-page.component';
import {HomePageComponent} from './homepage/home-page.component';
import {NavigationBarComponent} from './navigationbar/navigation-bar.component';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';
import {IdeasTableComponent} from './ideastable/ideas-table.component';
import {IdeaService} from './services/idea.service';
import {AuthenticationService} from './services/authentication.service';
import {NewUserFormPageComponent} from './newuserformpage/new-user-form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NewIdeaFormPageComponent,
    HomePageComponent,
    NavigationBarComponent,
    IdeasTableComponent,
    NewIdeaFormPageComponent,
    HomePageComponent,
    NavigationBarComponent,
    NewUserFormPageComponent
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
