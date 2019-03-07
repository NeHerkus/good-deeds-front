import {TestBed} from '@angular/core/testing';

import {IdeaService} from './idea.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('IdeaService', () => {
  let service: IdeaService;



  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [IdeaService]
  }));


  beforeEach(() => {
    service =  TestBed.get(IdeaService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

