import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';
import {AppComponent} from './app.component';
import {HomePageComponent} from './homepage/home-page.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
      ],
      declarations: [
        AppComponent,
        HomePageComponent,
        NavigationBarComponent
      ],
    }).compileComponents();
  }));
});
