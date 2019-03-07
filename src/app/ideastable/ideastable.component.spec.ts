import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeastableComponent } from './ideastable.component';
import { HttpClientModule } from '@angular/common/http';


describe('IdeastableComponent', () => {
  let component: IdeastableComponent;
  let fixture: ComponentFixture<IdeastableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IdeastableComponent,
      ],
      imports: [
        HttpClientModule
      ]
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
