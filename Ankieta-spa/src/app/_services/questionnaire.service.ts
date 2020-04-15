import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../_models/question';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createQuestionaire(question: any) {
    return this.http.post(this.baseUrl + 'questionnaire/create', question);
  }
}
