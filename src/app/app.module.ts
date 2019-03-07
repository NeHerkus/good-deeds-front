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
import {NewIdeaFormpageComponent} from './new-idea-formpage/new-idea-formpage.component';
import {HomePageComponent} from './homepage/home-page.component';
import {NavigationBarComponent} from './navigationbar/navigation-bar.component';
import {MatToolbarModule, MatButtonModule, MatIconModule, MatTable, MatTableDataSource} from '@angular/material';
import {IdeasTableComponent} from './ideas-table/ideas-table.component';
import {IdeaService} from './services/idea.service';


@NgModule({
  declarations: [
    AppComponent,
    NewIdeaFormpageComponent,
    HomePageComponent,
    NavigationBarComponent,
    IdeasTableComponent,
    NewIdeaFormpageComponent,
    HomePageComponent,
    NavigationBarComponent
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

  providers: [IdeaService],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
