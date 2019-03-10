import {Component, OnInit} from '@angular/core';
import {IdeaService} from '../services/idea.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-new-idea-formpage',
  templateUrl: './new-idea-formpage.component.html',
  styleUrls: ['./new-idea-formpage.component.css']
})
export class NewIdeaFormpageComponent implements OnInit {

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

  maxInputLength20 = 20;
  maxInputLength77 = 77;
  maxInputLength150 = 150;
  maxInputLength500 = 500;

  constructor(private formBuilder: FormBuilder,
              private ideaService: IdeaService,
              private invalidFormError: MatSnackBar) {
  }

  ngOnInit() {
    this.createIdeaForm();

  }

  createIdeaForm() {
    this.ideaForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(this.maxInputLength77)]],
      location: ['', [Validators.required, Validators.maxLength(this.maxInputLength77)]],
      organization: ['', [Validators.required, Validators.maxLength(this.maxInputLength77)]],
      website: ['', [Validators.maxLength(this.maxInputLength77)]],
      optimalParticipatorsAmount: ['', [Validators.maxLength(this.maxInputLength20)]],
      // TODO nesugalvojau kaip normaliai sutvarkyti mygtuku kad isduotu enumu array'u,
      //  rasau category kaip HELP_FOR_OTHERS ir bandau siusti i BE
      category: [[null, null, null, null, null]],
      description: ['', [Validators.required, Validators.maxLength(this.maxInputLength500)]],
      contactPerson: ['', [Validators.required, Validators.maxLength(this.maxInputLength150)]]
    });
  }

  onSubmitButtonPress() {
    if (this.ideaForm.valid) {
      this.ideaService.createIdea(this.ideaForm.value).subscribe(
        res => {
          console.log('Request succesfully sent');
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

