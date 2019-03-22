import {MatSnackBar} from '@angular/material';
import {FormBuilder} from '@angular/forms';
import {IdeaService} from './idea.service';
import {JwtService} from './jwt.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormNotificatorService {
  constructor(private formBuilder: FormBuilder,
              private ideaService: IdeaService,
              private authService: JwtService,
              private router: Router,
              private route: ActivatedRoute,
              private formNotificator: MatSnackBar) {
  }

  formNotificatorService(message: string, action: string) {
    this.formNotificator.open(message, action, {
      duration: 2500,
      verticalPosition: 'top'
    });
  }
}
