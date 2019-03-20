import {Component, OnInit} from '@angular/core';
import {IdeaService} from '../services/idea.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {IDEA_FORM_OPTIONS} from '../constants/idea-form-constants';
import {IdeaCategory} from '../enums/idea-category';
import {Idea} from '../models/idea';

@Component({
  selector: 'app-new-idea-formpage',
  templateUrl: './new-idea-formpage.component.html',
  styleUrls: ['./new-idea-formpage.component.css']
})
export class NewIdeaFormpageComponent implements OnInit {

  ideaFormOptions = IDEA_FORM_OPTIONS;
  ideaForm: FormGroup;
  mappedIdeaCategories: any[] = [];
  ideaCategory = [
    {category: IdeaCategory.HELP_FOR_OTHERS, selected: false, name: 'Time/Help to others'},
    {category: IdeaCategory.TIME_FOR_ENVIRONMENT, selected: false, name: 'Time for better environment'},
    {category: IdeaCategory.TIME_FOR_KNOWLEDGE, selected: false, name: 'Time of sharing knowledge'},
    {category: IdeaCategory.TIME_FOR_COMMUNITIES, selected: false, name: 'Time for local communities'},
    {category: IdeaCategory.VOLUNTEERING, selected: false, name: 'Professional volunteering'}
  ];
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

  get categories() {
    return this.ideaForm.get('categories') as FormArray;
  }

  createIdeaForm() {
    this.ideaForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(IDEA_FORM_OPTIONS.nameFormMaxSymbols)]],
      location: ['', [Validators.required]],
      organization: ['', [Validators.required, Validators.maxLength(IDEA_FORM_OPTIONS.organisationFormMaxSymbols)]],
      website: ['', [Validators.maxLength(IDEA_FORM_OPTIONS.websiteFormMaxSymbols)]],
      optimalParticipantsAmount: ['Unimportant', [Validators.maxLength(IDEA_FORM_OPTIONS.optimalParticipantsAmount)]],

      categories: this.buildCategories(),
      description: ['', [Validators.required, Validators.maxLength(IDEA_FORM_OPTIONS.ideaFormMaxSymbols)]],
      contactPerson: ['', [Validators.required, Validators.maxLength(IDEA_FORM_OPTIONS.contactFormMaxSymbols)]]
    });
  }

  buildCategories() {
    const categoryArray = this.ideaCategory.map(category => {
      return this.formBuilder.control(category.selected);
    });
    return this.formBuilder.array(categoryArray);
  }

  createIdea(): Idea {
    for (let i = 0; i < this.ideaForm.get('categories').value.length; i++) {
      console.log(this.ideaForm.get('categories').value[i]);
      if (this.ideaForm.get('categories').value[i]) {
        this.mappedIdeaCategories.push(this.ideaCategory[i].category);
      }
    }
    return {...this.ideaForm.value, categories: this.mappedIdeaCategories};
  }

  onSubmitButtonPress() {
    if (this.ideaForm.valid) {
      this.ideaService.createIdea(this.createIdea()).subscribe(
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

