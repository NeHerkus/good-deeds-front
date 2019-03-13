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
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('token')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(this.baseUrl + '/login', {email, password}, {observe: 'response'}).pipe(map(res => {
      console.log(res.headers.get('Authorization'));
    }));
    //   .pipe(map(user => {
    //   console.log(user.token + ' ' + user.getToken());
    //   if (user && user.token) {
    //     localStorage.setItem('token', JSON.stringify(user.token));
    //     this.currentUserSubject.next(user);
    //   }
    // }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
