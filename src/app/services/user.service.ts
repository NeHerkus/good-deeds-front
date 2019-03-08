import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {User} from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://good-deed.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/users');
  }

  getById(id: number) {
    return this.http.get(this.baseUrl + '/users' + id);
  }

  register(user: User) {
    return this.http.post(this.baseUrl + '/users/register', user);
  }

  update(user: User) {
    return this.http.put(this.baseUrl + '/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/users/' + id);
  }
}
