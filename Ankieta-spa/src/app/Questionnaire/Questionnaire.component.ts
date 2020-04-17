import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../_services/questionnaire.service';
import { Question } from '../_models/question';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Questionnaire',
  templateUrl: './Questionnaire.component.html',
  styleUrls: ['./Questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  questionnaire: Question;
  vote: FormGroup;

  constructor(private questService: QuestionnaireService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private alertify: AlertifyService) { }

  ngOnInit() {
    this.vote = this.formBuilder.group({
      answerId: new FormControl('', Validators.required),
      nick: new FormControl('', Validators.required)
    });

    this.route.data.subscribe(data => {
      this.questionnaire = data.questionnaire;
    });
  }

  submit() {
    this.questService.sendVote(this.vote.value).subscribe(next => {
      this.router.navigate(['/questionnaire/' + this.route.snapshot.params.id]);
      this.alertify.success('Głos dodany!');
    }, error => {
      this.router.navigate(['/home']);
      this.alertify.error(error);
    });
  }
}
