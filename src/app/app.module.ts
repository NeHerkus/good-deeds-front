// angular imports
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularMaterialModule} from './angular-material';
import {HttpClientModule} from '@angular/common/http';
<<<<<<< HEAD

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

=======
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// dev imports
>>>>>>> new-idea-form-page
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewIdeaFormpageComponent} from './new-idea-formpage/new-idea-formpage.component';
import {HomePageComponent} from './homepage/home-page.component';
import {NavigationBarComponent} from './navigationbar/navigation-bar.component';
<<<<<<< HEAD
import {MatToolbarModule, MatButtonModule, MatIconModule, MatTable, MatTableDataSource} from '@angular/material';
import { IdeasTableComponent } from './ideas-table/ideas-table.component';

=======
import {IdeastableComponent} from './ideastable/ideastable.component';
import {IdeaService} from './services/idea.service';
>>>>>>> new-idea-form-page

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    IdeasTableComponent,
    NewIdeaFormpageComponent,
    HomePageComponent,
    NavigationBarComponent,
    IdeasTableComponent
=======
    IdeastableComponent,
    NewIdeaFormpageComponent,
    HomePageComponent,
    NavigationBarComponent
>>>>>>> new-idea-form-page
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
<<<<<<< HEAD
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
=======
    ReactiveFormsModule,
    FormsModule
>>>>>>> new-idea-form-page
  ],

  providers: [IdeaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
