import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IdeasTableComponent} from './ideas-table.component';
import {AngularMaterialModule} from '../angular-material';


describe('IdeasTableComponent', () => {
  let component: IdeasTableComponent;
  let fixture: ComponentFixture<IdeasTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdeasTableComponent],
      imports: [AngularMaterialModule]
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
