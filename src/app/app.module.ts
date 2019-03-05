import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularMaterialModule} from './angular-material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NewIdeaFormpageComponent} from './new-idea-formpage/new-idea-formpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NewIdeaFormpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
