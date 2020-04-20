import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { QuestionnaireService } from '../../_services/questionnaire.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  questionnaireForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private questService: QuestionnaireService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
    this.questionnaireForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      time: new FormControl(10, [Validators.required, Validators.min(1), Validators.max(99)]),
      answers: this.formBuilder.array([this.newAnswer()])
    });
  }

  submit() {
    this.questService.createQuestionaire(this.questionnaireForm.value)
      .subscribe(data => {
        this.alertify.success('Utworzono pytanie!');
        this.router.navigate(['/questionnaire/' + data]);
      });
  }

  newAnswer(): FormGroup {
    return this.formBuilder.group({
      content: new FormControl('', Validators.required)
    });
  }

  addAnswer() {
    const ans = this.questionnaireForm.get('answers') as FormArray;
    ans.push(this.newAnswer());
  }

  removeAnswer() {
    const ans = this.questionnaireForm.get('answers') as FormArray;
    const i = ans.length;
    if (i > 1) {
      ans.removeAt(i - 1);
    }
  }
}
