import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule} from '@angular/material';

import {NewIdeaFormpageComponent} from './new-idea-formpage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('NewIdeaFormpageComponent', () => {
  let component: NewIdeaFormpageComponent;
  let fixture: ComponentFixture<NewIdeaFormpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewIdeaFormpageComponent
      ],
      imports: [
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        BrowserAnimationsModule
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
