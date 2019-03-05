import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIdeaFormpageComponent } from './new-idea-formpage.component';

describe('NewIdeaFormpageComponent', () => {
  let component: NewIdeaFormpageComponent;
  let fixture: ComponentFixture<NewIdeaFormpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIdeaFormpageComponent ]
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
