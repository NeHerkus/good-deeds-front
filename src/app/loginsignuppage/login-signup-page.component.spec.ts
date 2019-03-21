import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupPageComponent } from './login-signup-page.component';

describe('LoginSignupPageComponent', () => {
  let component: LoginSignupPageComponent;
  let fixture: ComponentFixture<LoginSignupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSignupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
