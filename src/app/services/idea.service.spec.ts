import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {AngularMaterialModule} from '../angular-material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IdeaService} from './idea.service';
import {NewIdeaFormpageComponent} from '../new-idea-formpage/new-idea-formpage.component';
import {IdeastableComponent} from '../ideastable/ideastable.component';


describe('IdeaService', () => {

  TestBed.configureTestingModule({
    declarations: [
      NewIdeaFormpageComponent,
      IdeastableComponent,
    ],
    imports: [
      HttpClientModule,
      AngularMaterialModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
    .compileComponents();
});



it('should be created', () => {
  const service: IdeaService = TestBed.get(IdeaService);
  expect(service).toBeTruthy();
});

