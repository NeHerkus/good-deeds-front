import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Idea} from '../models/idea';
import {API_ENDPOINTS} from '../constants/api-constants';
import {JwtService} from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  constructor(
    private http: HttpClient,
    private authService: JwtService
  ) {
  }

  getIdeas(): Observable<Idea[]> {
    if (this.authService.isLoggedIn) {
      return this.http.get<Idea[]>(API_ENDPOINTS.apiUrl + 'idea/authenticated');
    } else {
      return this.http.get<Idea[]>(API_ENDPOINTS.apiUrl + 'idea');
    }
  }

  createIdea(idea: Idea) {
    return this.http.post(API_ENDPOINTS.apiUrl + 'idea', idea);
  }

  updateParticipating(id: string, message: string) {
    return this.http.post(API_ENDPOINTS.apiUrl + 'idea', {id, message});
  }
}
