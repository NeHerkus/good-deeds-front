import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/user';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  form: FormGroup;                    // {1}
  private formSubmitAttempt: boolean;

  constructor(
    private formBuilder: FormBuilder,      // {3}
  ) {
  }

  ngOnInit() {
    this.createUserForm();

  }

  createUserForm() {

    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)

    );
  }

  onSubmit() {

    if (this.form.valid) {
      this.login(this.form.value);
    }
    this.formSubmitAttempt = true;
  }

  login(user: User) {
    if (!(user.name !== '' && user.password !== '')) {
      return;
    }
    console.log('oba');
  }

}
