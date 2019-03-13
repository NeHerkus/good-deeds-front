import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {AuthenticationService} from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule],
    providers: [AuthenticationService]
  }));

  beforeEach(() => {
    service = TestBed.get(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
