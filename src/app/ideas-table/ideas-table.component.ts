import {Component, OnInit} from '@angular/core';
import {IdeaService} from '../services/idea.service';
import {Idea} from '../models/Idea';

@Component({
  selector: 'app-ideas-table',
  templateUrl: './ideas-table.component.html',
  styleUrls: ['./ideas-table.component.css']
})
export class IdeasTableComponent implements OnInit {

  ideas: Idea[];
  columnNames: string[] = ['name', 'organization', 'location'];

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
