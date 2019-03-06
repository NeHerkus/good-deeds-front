import {Component, OnInit} from '@angular/core';
import {IdeaService} from '../services/idea.service';
import {Idea} from '../models/Idea';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideastable.component.html',
  styleUrls: ['./ideastable.component.css']
})
export class IdeastableComponent implements OnInit {

  ideas: Idea[];

  constructor(private ideaService: IdeaService) {
  }

  ngOnInit() {
    this.ideaService.getIdeas().subscribe(
      ideasList => {
        this.ideas = ideasList;
      }
    );
  }

}


