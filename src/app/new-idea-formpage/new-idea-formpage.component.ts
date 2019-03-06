import {Component, OnInit} from '@angular/core';
import {Idea} from '../models/Idea';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-idea-formpage',
  templateUrl: './new-idea-formpage.component.html',
  styleUrls: ['./new-idea-formpage.component.css']
})
export class NewIdeaFormpageComponent implements OnInit {

  idea: Idea;
  isReady: false;
  ideaForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
