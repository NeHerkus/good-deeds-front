import { Component, OnInit } from '@angular/core';
import {USER_FORM_OPTIONS} from '../constants/user-form-constants';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JwtService} from '../services/jwt.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login-signup-page',
  templateUrl: './login-signup-page.component.html',
  styleUrls: ['./login-signup-page.component.css']
})
export class LoginSignupPageComponent implements OnInit {

  userFormOptions = USER_FORM_OPTIONS;
  submitted = false;
  hide = true;
  userForm: FormGroup;
  loading = false;
  returnUrl: string;

  static checkPasswords(c: AbstractControl) {
    const password = c.get('password').value;
    const confirmPassword = c.get('confirmPassword').value;

    return password === confirmPassword ? null : {notMatching: true};
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: JwtService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.initForm();
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      fullName: [
        '',
        [Validators.required,
          Validators.maxLength(USER_FORM_OPTIONS.fullNameFormMaxSymbols)]
      ],
      email: [
        '',
        [Validators.required,
          Validators.email,
          Validators.maxLength(USER_FORM_OPTIONS.emailFormMaxSymbols),
        ]
      ],
      password: [
        '',
        [Validators.required,
          Validators.maxLength(USER_FORM_OPTIONS.passwordFormMaxSymbols),
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$'),
        ]
      ],
      confirmPassword: [
        '',
        [Validators.required]
      ]
    }, {validators: LoginSignupPageComponent.checkPasswords});
  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.register(this.f.fullName.value, this.f.email.value, this.f.password.value)
    // .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        });
  }
}
