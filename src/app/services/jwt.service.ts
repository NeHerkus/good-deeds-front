import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {API_ENDPOINTS} from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  login(email: string, password: string) {
    return this.httpClient.post(API_ENDPOINTS.apiUrl + 'login', {
        email,
        password
      },
      {observe: 'response'})
      .pipe(tap(res => {
        localStorage.setItem('access_token', res.headers.get('Authorization'));

      }));
  }

  register(fullName: string, email: string, password: string) {
    return this.httpClient.post(API_ENDPOINTS.apiUrl + 'user', {
      fullName,
      email,
      password
    })
      .pipe(tap(() => {
        this.login(email, password).subscribe();
      }));
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}
