import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Idea} from '../models/Idea';
import {API_ENDPOINTS} from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  constructor(private http: HttpClient) {
  }

  getIdeas(): Observable<Idea[]> {
    return this.http.get<Idea[]>(API_ENDPOINTS.API_URL + '/idea');
  }

  createIdea(idea: Idea) {
    return this.http.post(API_ENDPOINTS.API_URL + '/idea', idea);
  }
}
