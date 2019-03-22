import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtService} from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptorService implements HttpInterceptor {

  constructor(public auth: JwtService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    if (this.auth.isLoggedIn) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.auth.getToken()}`
        }
      });
      return next.handle(request);
    } else {
      return next.handle(request);
    }
  }
}
