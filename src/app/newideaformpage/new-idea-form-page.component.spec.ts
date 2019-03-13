import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AngularMaterialModule} from '../angular-material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {NewIdeaFormPageComponent} from './new-idea-form-page.component';
import {IdeasTableComponent} from '../ideastable/ideas-table.component';

describe('NewIdeaFormPageComponent', () => {
  let component: NewIdeaFormPageComponent;
  let fixture: ComponentFixture<NewIdeaFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewIdeaFormPageComponent,
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
    fixture = TestBed.createComponent(NewIdeaFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
