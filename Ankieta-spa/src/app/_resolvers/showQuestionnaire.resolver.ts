import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Question } from '../_models/question';
import { QuestionnaireService } from '../_services/questionnaire.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ShowQuestResolver implements Resolve<Question> {
    constructor(private questionService: QuestionnaireService,
                private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Question> {
        return this.questionService.getQuestionnaire(route.params.id).pipe(
            catchError(error => {
                console.log(error);
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
