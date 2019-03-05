import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {HomePageComponent} from './homepage/home-page.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        HomePageComponent,
        NavigationBarComponent
      ],
    }).compileComponents();
  }));
});
