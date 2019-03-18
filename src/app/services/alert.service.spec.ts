import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {AlertService} from './alert.service';

describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [AlertService]
  }));

  beforeEach(() => {
    service = TestBed.get(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
