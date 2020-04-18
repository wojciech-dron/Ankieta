import { Component, OnInit, Input } from '@angular/core';
import { QuestionnaireService } from 'src/app/_services/questionnaire.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Question } from 'src/app/_models/question';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() questionnaire: Question;
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
