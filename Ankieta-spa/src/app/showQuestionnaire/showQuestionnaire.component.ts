import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../_services/questionnaire.service';
import { Question } from '../_models/question';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-showQuestionnaire',
  templateUrl: './showQuestionnaire.component.html',
  styleUrls: ['./showQuestionnaire.component.css']
})
export class ShowQuestionnaireComponent implements OnInit {
  questionnaire: Question;
  vote: FormGroup;

  constructor(private questSercice: QuestionnaireService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.vote = this.formBuilder.group({
      answerId: new FormControl('', Validators.required),
      user: new FormControl('', Validators.required)
    });
    this.route.data.subscribe(data => {
      this.questionnaire = data.questionnaire;
    });

    this.vote.valueChanges.subscribe(data => {
      console.log(data);
    });
  }
}
