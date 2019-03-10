import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserFormErrorStateMatcher} from './user-form-error-state-matcher';

@Component({
  selector: 'app-new-user-formpage',
  templateUrl: './new-user-formpage.component.html',
  styleUrls: ['./new-user-formpage.component.css']
})
export class NewUserFormpageComponent implements OnInit {
  maxInputLength77 = 77;
  hide = true;
  userForm: FormGroup;

  formControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new UserFormErrorStateMatcher();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.maxLength(this.maxInputLength77)]],
      email: [this.formControl, Validators.maxLength(this.maxInputLength77)],
      password: ['', [Validators.required, Validators.maxLength(this.maxInputLength77)]],
      confirmPassword: ['', [Validators.required, Validators.maxLength(this.maxInputLength77)]]
    });
  }
}

