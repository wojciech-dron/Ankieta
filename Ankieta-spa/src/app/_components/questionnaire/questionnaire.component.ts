import { Component, OnInit } from '@angular/core';
import { Question } from '../../_interfaces/question';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Questionnaire',
  templateUrl: './Questionnaire.component.html'
})
export class QuestionnaireComponent implements OnInit {
  questionnaire: Question;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.questionnaire = data.questionnaire;
    });
  }
}
