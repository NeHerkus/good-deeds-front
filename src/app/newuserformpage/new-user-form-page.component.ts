import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppConstants} from '../app-constants';

@Component({
  selector: 'app-new-user-formpage',
  templateUrl: './new-user-form-page.component.html',
  styleUrls: ['./new-user-form-page.component.css']
})
export class NewUserFormPageComponent implements OnInit {
  hide = true;
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  get appConstants() {
    return AppConstants;
  }

  static checkPasswords(c: AbstractControl) {
    const password = c.get('password').value;
    const confirmPassword = c.get('confirmPassword').value;

    return password === confirmPassword ? null : {notMatching: true};
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      fullName: [
        '',
        [Validators.required,
          Validators.maxLength(AppConstants.FULLNAME_FORM_MAX_SYMBOLS)]
      ],
      email: [
        '',
        [Validators.required,
          Validators.email,
          Validators.maxLength(AppConstants.EMAIL_FORM_MAX_SYMBOLS),
        ]
      ],
      password: [
        '',
        [Validators.required,
          Validators.maxLength(AppConstants.PASSWORD_FORM_MAX_SYMBOLS),
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$'),
        ]
      ],
      confirmPassword: [
        '',
        [Validators.required]
      ]
    }, {validators: NewUserFormPageComponent.checkPasswords});
  }
}

