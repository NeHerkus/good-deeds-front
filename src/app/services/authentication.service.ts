import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = 'https://good-deed.herokuapp.com';
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.baseUrl + '/users/authenticate', {username, password}).pipe(map(user => {
      if (user && user.token) {
        localStorage.setItem('currentUser'.JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
