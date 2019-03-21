import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IdeaService} from '../services/idea.service';
import {Idea} from '../models/idea';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {JwtService} from '../services/jwt.service';

@Component({
  selector: 'app-ideas-table',
  templateUrl: './ideas-table.component.html',
  styleUrls: ['./ideas-table.component.css'],
})
export class IdeasTableComponent implements OnInit, AfterViewInit {

  ideasLength: number;
  ideasSource = new MatTableDataSource<Idea>();
  readonly pageSize: number = 5;
  readonly pageSizeOptions: number[] = [5, 10, 15];
  columnNames: string[] = ['name', 'organization', 'location', 'action'];
  private paginator: MatPaginator;
  private isParticipating: boolean;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(private ideaService: IdeaService,
              private authService: JwtService) {
  }

  ngOnInit() {
    this.ideaService.getIdeas().subscribe(
      ideasList => {
        this.ideasSource.data = ideasList;
        this.ideasLength = ideasList.length;
        for (let i = 0; i < this.ideasLength; i++) {
          if (this.ideasSource.data[i].isUserParticipating === true) {
            this.isParticipating = true;
          }
        }
      }
    );
  }

  ngAfterViewInit() {
    this.ideasSource.paginator = this.paginator;
  }

  setDataSourceAttributes() {
    this.ideasSource.paginator = this.paginator;
    if (this.paginator) {
      this.applyFilter('');
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.ideasSource.filter = filterValue;
  }

  onParticipateButtonPress(id: string) {
    this.ideaService.updateParticipating(id, 'PARTICIPANT');
  }

  onOrganizeButtonPress(id: string) {
    this.ideaService.updateParticipating(id, 'CAPTAIN');
  }
}
