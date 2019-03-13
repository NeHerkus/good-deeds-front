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

  private nameFieldMaxSymbols = 77;
  private locationFieldMaxSymbols = 77;
  private organizationFieldMaxSymbols = 77;
  private websiteFieldMaxSymbols = 77;
  private optPartFieldMaxSymbols = 20;
  private descFieldMaxSymbols = 500;
 private contactPersFieldMaxSymbols = 150;
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
      name: ['', [Validators.required, Validators.maxLength(this.nameFieldMaxSymbols)]],
      location: ['', [Validators.required, Validators.maxLength(this.locationFieldMaxSymbols)]],
      organization: ['', [Validators.required, Validators.maxLength(this.organizationFieldMaxSymbols)]],
      website: ['', [Validators.maxLength(this.websiteFieldMaxSymbols)]],
      optimalParticipatorsAmount: ['', [Validators.maxLength(this.optPartFieldMaxSymbols)]],
      // TODO nesugalvojau kaip normaliai sutvarkyti mygtuku kad isduotu enumu array'u,
      //  rasau category kaip HELP_FOR_OTHERS ir bandau siusti i BE
      category: [[null, null, null, null, null]],
      description: ['', [Validators.required, Validators.maxLength(this.descFieldMaxSymbols)]],
      contactPerson: ['', [Validators.required, Validators.maxLength(this.contactPersFieldMaxSymbols)]]
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

