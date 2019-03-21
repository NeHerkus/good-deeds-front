import {Component, OnInit} from '@angular/core';
import {JwtService} from '../services/jwt.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private authService: JwtService) {
    this.authService.onGetUserInfoEvent.subscribe(
      () => {
        this.userInfo = JSON.parse(localStorage.getItem('user'));
      }
    );
  }

  userInfo: string = JSON.parse(localStorage.getItem('user'));

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  onLogout() {
    this.authService.logout();
  }
}
