import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireResolver } from './_resolvers/questionnaire.resolver';
import { ListComponent } from './list/list.component';
import { ListResolver } from './_resolvers/list.resolver';


export const routes: Routes = [
  { path: 'home', component: ListComponent, resolve: {questions: ListResolver} },
  { path: 'create', component: CreateComponent},
  { path: 'questionnaire/:id', component: QuestionnaireComponent,
      resolve: {questionnaire: QuestionnaireResolver} },
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
