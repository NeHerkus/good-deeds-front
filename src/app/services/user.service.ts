import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {User} from '../models/user';
import {API_ENDPOINTS} from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }
  register(user: User): Observable<any> {
    return this.http.post(API_ENDPOINTS.apiUrl + 'user', user);
  }

  update(user: User): Observable<any> {
    return this.http.put(API_ENDPOINTS.apiUrl + 'users' + user, user);
  }
}
