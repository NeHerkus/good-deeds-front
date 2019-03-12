import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../models/user';

@Injectable()
export class AuthService {

  constructor(
    private router: Router
  ) {}
  login(user: User) {
    if (user.name !== '' && user.password !== '' ) {
      this.router.navigate(['/home']);
    }
  }

}
