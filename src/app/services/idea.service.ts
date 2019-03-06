import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Idea} from '../models/Idea';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  baseUrl = 'https://good-deed.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getIdeas(): Observable<Idea[]> {
    return this.http.get<Idea[]>(this.baseUrl + '/idea');
  }

  createIdea(idea: Idea) {
    return this.http.post(this.baseUrl + '/idea', idea);
  }
}
