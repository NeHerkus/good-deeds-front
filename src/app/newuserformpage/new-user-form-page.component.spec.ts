import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AngularMaterialModule} from '../angular-material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {NewUserFormPageComponent} from './new-user-form-page.component';

describe('NewUserFormPageComponent', () => {
  let component: NewUserFormPageComponent;
  let fixture: ComponentFixture<NewUserFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewUserFormPageComponent,
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
    fixture = TestBed.createComponent(NewUserFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
