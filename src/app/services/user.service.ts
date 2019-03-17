import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://good-deed.herokuapp.com';

  constructor(private http: HttpClient) {
  }
  register(user: User): Observable<object> {
    return this.http.post(this.baseUrl + '/user', user);
  }

  update(user: User): Observable<object> {
    return this.http.put(this.baseUrl + '/users/' + user, user);
  }
}
