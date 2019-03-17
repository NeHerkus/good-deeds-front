import {Injectable} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {AlertType} from '../models/alert-type';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private messageSource = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          this.keepAfterNavigationChange = false;
        } else {
          this.messageSource.next();
        }
      }
    });
  }

  get alertType() {
    return AlertType;
  }

  success(alert) {
    this.keepAfterNavigationChange = alert.keepAfterNavigationChange;
    this.messageSource.next({type: AlertType.SUCCESS, text: alert.message});
  }

  error(alert) {
    this.keepAfterNavigationChange = alert.keepAfterNavigationChange;
    this.messageSource.next({type: AlertType.ERROR, text: alert.message});
  }

  getMessage(): Observable<any> {
    return this.messageSource.asObservable();
  }
}
