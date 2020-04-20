import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Question } from '../_interfaces/question';
import { QuestionnaireService } from '../_services/questionnaire.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';

@Injectable()
export class QuestionnaireResolver implements Resolve<Question> {
    constructor(private questionService: QuestionnaireService,
                private router: Router,
                private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Question> {
        return this.questionService.getQuestionnaire(route.params.id).pipe(
            catchError(error => {
                this.alertify.error('Nie można załadować pytania.');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
