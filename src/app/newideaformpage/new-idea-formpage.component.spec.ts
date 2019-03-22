import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AngularMaterialModule} from '../angular-material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';


import {NewIdeaFormpageComponent} from './new-idea-formpage.component';
import {IdeasTableComponent} from '../ideastable/ideas-table.component';
import {HomePageComponent} from '../homepage/home-page.component';
import {NewUserFormpageComponent} from '../newuserformpage/new-user-formpage.component';
import {LoginSignupPageComponent} from '../loginsignuppage/login-signup-page.component';

describe('NewIdeaFormpageComponent', () => {
  let component: NewIdeaFormpageComponent;
  let fixture: ComponentFixture<NewIdeaFormpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewIdeaFormpageComponent,
        IdeasTableComponent,
        HomePageComponent,
        NewUserFormpageComponent,
        LoginSignupPageComponent
      ],
      imports: [
        AngularMaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIdeaFormpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
