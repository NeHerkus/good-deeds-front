import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  constructor(private ideaService: IdeaService) {
  }
}
