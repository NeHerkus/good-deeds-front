import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IdeasTableComponent} from './ideas-table.component';
import {AngularMaterialModule} from '../angular-material';
import {MatPaginatorModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


describe('IdeasTableComponent', () => {
  let component: IdeasTableComponent;
  let fixture: ComponentFixture<IdeasTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdeasTableComponent],
      imports: [AngularMaterialModule, MatPaginatorModule, HttpClientModule]
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
