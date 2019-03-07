import {Component, OnInit} from '@angular/core';
import {IdeaService} from '../services/idea.service';

@Component({
  selector: 'app-new-idea-formpage',
  templateUrl: './new-idea-formpage.component.html',
  styleUrls: ['./new-idea-formpage.component.css']
})
export class NewIdeaFormpageComponent implements OnInit {

  constructor(private ideaService: IdeaService) {
  }

  ngOnInit() {
  }
}
