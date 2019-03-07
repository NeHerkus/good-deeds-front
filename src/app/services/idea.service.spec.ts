import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AngularMaterialModule} from '../angular-material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IdeaService} from './idea.service';
import {NewIdeaFormpageComponent} from '../new-idea-formpage/new-idea-formpage.component';
import {IdeastableComponent} from '../ideastable/ideastable.component';

describe('IdeaService', () => {
  let service: IdeaService;
  let fixture: ComponentFixture<IdeaService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewIdeaFormpageComponent,
        IdeastableComponent,
        IdeaService
      ],
      imports: [
        AngularMaterialModule,
        FormsModule,
        ReactiveFormsModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaService);
    service = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

