import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {JwtService} from '../services/jwt.service';
import {FormNotificatorService} from '../services/form-notificator.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  form: FormGroup;
  returnUrl: string;
  userInfo: any = JSON.parse(localStorage.getItem('user'));

  constructor(
    private authService: JwtService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private formNotificator: FormNotificatorService
  ) {
    this.authService.onGetUserInfoEvent.subscribe(
      () => {
        this.userInfo = JSON.parse(localStorage.getItem('user'));
      }
    );
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  onLogout() {
    this.formNotificator.formNotificatorService('Successfully logged out', 'OK');
    this.authService.logout();
  }

}
