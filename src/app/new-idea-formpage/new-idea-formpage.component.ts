import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IdeaService} from '../services/idea.service';

@Component({
  selector: 'app-new-idea-formpage',
  templateUrl: './new-idea-formpage.component.html',
  styleUrls: ['./new-idea-formpage.component.css']
})
export class NewIdeaFormpageComponent implements OnInit {

  ideaForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private ideaService: IdeaService) {
  }

  ngOnInit() {
    this.createIdeaForm();
  }

  createIdeaForm() {
    this.ideaForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(77)]],
      location: ['', [Validators.required, Validators.maxLength(77)]],
      organization: ['', [Validators.required, Validators.maxLength(77)]],
      website: ['', [Validators.required, Validators.maxLength(77)]],
      optimalParticipatorsAmount: ['', [Validators.required, Validators.maxLength(20)]],
      // TODO nesugalvojau kaip normaliai sutvarkyti mygtuku kad isduotu enumu array'u,
      //  rasau category kaip HELP_FOR_OTHERS ir bandau siusti i BE
      category: [null],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      contactPerson: ['', [Validators.required, Validators.maxLength(150)]]
    });
  }

  onSubmitButtonPress() {
    this.ideaService.createIdea(this.ideaForm.value).subscribe(
      res => {
        console.log('Request succesfully sent');
      },
      err => {
        console.log('Error while sending request');
      }
    );
  }
}


//   name: [idea ? idea.location : 's', [Validators.required, Validators.maxLength(77)]],
//   location: [idea ? idea.location : '', [Validators.required, Validators.maxLength(77)]],
//   organization: [idea ? idea.organization : '', [Validators.required, Validators.maxLength(77)]],
//   website: [idea ? idea.website : '', [Validators.required, Validators.maxLength(77)]],
//   optimalParticipatorsAmount: [idea ? idea.optimalParticipatorsAmount : '', [Validators.required, Validators.maxLength(20)]],
//   description: [idea ? idea.description : '', [Validators.required, Validators.maxLength(500)]],
//   contactPerson: [idea ? idea.contactPerson : '', [Validators.required, Validators.maxLength(150)]]
