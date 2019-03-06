import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasTableComponent } from './ideas-table.component';

describe('IdeasTableComponent', () => {
  let component: IdeasTableComponent;
  let fixture: ComponentFixture<IdeasTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
