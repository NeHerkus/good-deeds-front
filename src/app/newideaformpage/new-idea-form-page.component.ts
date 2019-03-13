import {Component, OnInit} from '@angular/core';
import {IdeaService} from '../services/idea.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {AppConstants} from '../app-constants';

@Component({
  selector: 'app-new-idea-formpage',
  templateUrl: './new-idea-form-page.component.html',
  styleUrls: ['./new-idea-form-page.component.css']
})
export class NewIdeaFormPageComponent implements OnInit {

  ideaForm: FormGroup;
  locations: string[] = [
    'Vilnius',
    'Kaunas',
    'Klaipėda',
    'Šiauliai',
    'Panevežys',
    'Alytus',
    'Marijampolė',
    'Mažeikiai',
    'Jonava',
    'Utena',
    'Kėdainiai',
    'Telšiai',
    'Tauragė',
    'Ukmergė',
    'Visaginas',
    'Plungė',
    'Kretinga',
    'Šilutė',
    'Palanga',
    'Radviliškis',
    'Gargždai'];

  constructor(private formBuilder: FormBuilder,
              private ideaService: IdeaService,
              private invalidFormError: MatSnackBar) {
  }

  ngOnInit() {
    this.createIdeaForm();
  }

  get appConstants() {
    return AppConstants;
  }

  createIdeaForm() {
    this.ideaForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(AppConstants.NAME_FORM_MAX_SYMBOLS)]],
      location: ['', [Validators.required]],
      organization: ['', [Validators.required, Validators.maxLength(AppConstants.ORGANIZATION_FORM_MAX_SYMBOLS)]],
      website: ['', [Validators.maxLength(AppConstants.WEBSITE_FORM_MAX_SYMBOLS)]],
      optimalParticipatorsAmount: ['', [Validators.maxLength(AppConstants.PARTICIPATORS_FORM_MAX_SYMBOLS)]],
      // TODO nesugalvojau kaip normaliai sutvarkyti mygtuku kad isduotu enumu array'u,
      //  rasau category kaip null ir bandau siusti i BE
      category: [[null, null, null, null, null]],
      description: ['', [Validators.required, Validators.maxLength(AppConstants.IDEA_FORM_MAX_SYMBOLS)]],
      contactPerson: ['', [Validators.required, Validators.maxLength(AppConstants.CONTACT_FORM_MAX_SYMBOLS)]]
    });
  }

  onSubmitButtonPress() {
    if (this.ideaForm.valid) {
      this.ideaService.createIdea(this.ideaForm.value).subscribe(
        res => {
          console.log('Request successfully sent');
        },
        err => {
          console.log('Error while sending request');
        }
      );
    } else {
      this.openInvalidFormError('The form is invalid', 'Close');
    }
  }

  openInvalidFormError(message: string, action: string) {
    this.invalidFormError.open(message, action, {
      duration: 3000,
    });
  }
}

