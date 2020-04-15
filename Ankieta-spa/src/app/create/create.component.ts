import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { QuestionnaireService } from '../_services/questionnaire.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  questionnaireForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private questService: QuestionnaireService) { }

  ngOnInit() {
    this.questionnaireForm = this.formBuilder.group({
      title: ['', Validators.required],
      time: ['', Validators.required],
      answers: this.formBuilder.array([this.newAnswer()])
    });

    // this.questionnaireForm.valueChanges.subscribe(newValues => console.log(newValues));
  }

  submit() {
    this.questService.createQuestionaire(this.questionnaireForm.value).subscribe(data => {
      console.log(data);
    });
  }

  newAnswer(): FormGroup {
    return this.formBuilder.group({
      answer: ['', Validators.required]
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
