import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../_models/question';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createQuestionaire(question: any) {
    return this.http.post(this.baseUrl + 'questionnaire/create', question);
  }

  getQuestionnaire(id: number): Observable<Question> {
    return this.http.get<Question>(this.baseUrl + 'questionnaire/' + id);
  }

  sendVote(vote: any) {
    return this.http.post(this.baseUrl + 'questionnaire/vote', vote);
  }
}
