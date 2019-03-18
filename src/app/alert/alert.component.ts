import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

import {AlertService} from '../services/alert.service';
import {AlertType} from '../enums/alert-type';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})

export class AlertComponent implements OnInit, OnDestroy {
  private alertSubscription: Subscription;
  alertType = AlertType;
  message: string;

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertSubscription = this.alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
  }
}
