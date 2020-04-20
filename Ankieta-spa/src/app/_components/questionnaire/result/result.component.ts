import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/_interfaces/question';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() questionnaire: Question;

  constructor() { }

  ngOnInit() {
  }

}
