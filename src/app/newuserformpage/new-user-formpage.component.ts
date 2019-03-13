import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-new-user-formpage',
  templateUrl: './new-user-formpage.component.html',
  styleUrls: ['./new-user-formpage.component.css']
})
export class NewUserFormpageComponent implements OnInit {
  maxInputLength77 = 77;
  hide = true;
  userForm: FormGroup;

  static checkPasswords(c: AbstractControl) {
    const password = c.get('password').value;
    const confirmPassword = c.get('confirmPassword').value;

    return password === confirmPassword ? null : {notMatching: true};
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      fullName: [
        '',
        [Validators.required,
          Validators.maxLength(this.maxInputLength77)]
      ],
      email: [
        '',
        [Validators.required,
          Validators.email,
          Validators.maxLength(this.maxInputLength77),
        ]
      ],
      password: [
        '',
        [Validators.required,
          Validators.maxLength(this.maxInputLength77),
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$'),
        ]
      ],
      confirmPassword: [
        '',
        [Validators.required]
      ]
    }, {validators : NewUserFormpageComponent.checkPasswords});
  }
}

