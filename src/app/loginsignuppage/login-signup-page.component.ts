import {Component, OnInit} from '@angular/core';
import {USER_FORM_OPTIONS} from '../constants/user-form-constants';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JwtService} from '../services/jwt.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login-signup-page',
  templateUrl: './login-signup-page.component.html',
  styleUrls: ['./login-signup-page.component.css']
})
export class LoginSignupPageComponent implements OnInit {

  userFormOptions = USER_FORM_OPTIONS;
  signUpSubmitted = false;
  logInSubmitted = false;
  hide = true;
  signInForm: FormGroup;
  logInForm: FormGroup;
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
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.initSignUpForm();
    this.initLogInForm();
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  initSignUpForm() {
    this.signInForm = this.formBuilder.group({
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

  onSignUpSubmit() {
    this.signUpSubmitted = true;

    if (this.signInForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.register(
      this.signUpFormControls.fullName.value,
      this.signUpFormControls.email.value,
      this.signUpFormControls.password.value
    ).subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        // this.alertService.error(error);
        this.loading = false;
      });
  }

  get signUpFormControls() {
    return this.signInForm.controls;
  }

  initLogInForm() {
    this.logInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  onLogInSubmit() {
    this.logInSubmitted = true;

    if (this.logInForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.logInFormControls.email.value, this.logInFormControls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.loading = false;
        });
  }

  get logInFormControls() {
    return this.logInForm.controls;
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
}