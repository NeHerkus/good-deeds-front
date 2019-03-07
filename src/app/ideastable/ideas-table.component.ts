import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IdeaService} from '../services/idea.service';
import {Idea} from '../models/Idea';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-ideas-table',
  templateUrl: './ideas-table.component.html',
  styleUrls: ['./ideas-table.component.css'],
})
export class IdeasTableComponent implements OnInit, AfterViewInit {

  dataLength: number;
  dataSource = new MatTableDataSource<Idea>();
  columnNames: string[] = ['name', 'organization', 'location'];
  private paginator: MatPaginator;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(private ideaService: IdeaService) {
  }

  ngOnInit() {
    this.ideaService.getIdeas().subscribe(
      ideasList => {
        this.dataSource.data = ideasList;
        this.dataLength = ideasList.length;
        console.log(this.dataLength);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    if (this.paginator) {
      this.applyFilter('');
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
