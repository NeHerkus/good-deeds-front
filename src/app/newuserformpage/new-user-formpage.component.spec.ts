import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserFormpageComponent } from './new-user-formpage.component';

describe('NewUserFormpageComponent', () => {
  let component: NewUserFormpageComponent;
  let fixture: ComponentFixture<NewUserFormpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserFormpageComponent ]
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
