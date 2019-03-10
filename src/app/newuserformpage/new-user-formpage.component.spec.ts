import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AngularMaterialModule} from '../angular-material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {NewUserFormpageComponent} from './new-user-formpage.component';
import {IdeasTableComponent} from '../ideastable/ideas-table.component';
import {NewIdeaFormpageComponent} from '../newideaformpage/new-idea-formpage.component';

describe('NewUserFormpageComponent', () => {
  let component: NewUserFormpageComponent;
  let fixture: ComponentFixture<NewUserFormpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewUserFormpageComponent,
        IdeasTableComponent
      ],
      imports: [
        AngularMaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserFormpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
