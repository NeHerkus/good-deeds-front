import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {map} from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';
import {AppConstants} from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  login(email: string, password: string) {
    return this.httpClient.post<{ access_token: string }>(AppConstants.API_URL, {
        email,
        password
      },
      {observe: 'response'})
      .pipe(map(res => {
        localStorage.setItem('access_token', res.headers.get('Authorization'));
      }));
  }

  register(fullName: string, email: string, password: string) {
    return this.httpClient.post<{ access_token: string }>(AppConstants.API_URL, {
        fullName,
        email,
        password
      },
      {observe: 'response'})
      .pipe(tap(res => {
        this.login(email, password);
      }));
  }

  public get isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}
