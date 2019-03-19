import {Component, OnInit} from '@angular/core';
import {IdeaService} from '../services/idea.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {IDEA_FORM_OPTIONS} from '../constants/idea-form-constants';

@Component({
  selector: 'app-new-idea-formpage',
  templateUrl: './new-idea-formpage.component.html',
  styleUrls: ['./new-idea-formpage.component.css']
})
export class NewIdeaFormpageComponent implements OnInit {

  ideaFormOptions = IDEA_FORM_OPTIONS;
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

  createIdeaForm() {
    this.ideaForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(IDEA_FORM_OPTIONS.nameFormMaxSymbols)]],
      location: ['', [Validators.required]],
      organization: ['', [Validators.required, Validators.maxLength(IDEA_FORM_OPTIONS.organisationFormMaxSymbols)]],
      website: ['', [Validators.maxLength(IDEA_FORM_OPTIONS.websiteFormMaxSymbols)]],
      optimalParticipatorsAmount: ['Unimportant', [Validators.maxLength(IDEA_FORM_OPTIONS.optimalParticipatorsAmount)]],
      // TODO nesugalvojau kaip normaliai sutvarkyti mygtuku kad isduotu enumu array'u,
      //  rasau category kaip HELP_FOR_OTHERS ir bandau siusti i BE
      category: [[ null]],
      description: ['', [Validators.required, Validators.maxLength(IDEA_FORM_OPTIONS.ideaFormMaxSymbols)]],
      contactPerson: ['', [Validators.required, Validators.maxLength(IDEA_FORM_OPTIONS.contactFormMaxSymbols)]]
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

