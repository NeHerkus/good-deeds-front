import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeastableComponent } from './ideastable.component';

describe('IdeastableComponent', () => {
  let component: IdeastableComponent;
  let fixture: ComponentFixture<IdeastableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeastableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeastableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
