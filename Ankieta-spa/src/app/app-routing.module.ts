import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './_components/create/create.component';
import { QuestionnaireComponent } from './_components/questionnaire/questionnaire.component';
import { QuestionnaireResolver } from './_resolvers/questionnaire.resolver';
import { ListComponent } from './_components/list/list.component';
import { ListResolver } from './_resolvers/list.resolver';
import { BlankComponent } from './_components/blank/blank.component';


export const routes: Routes = [
  { path: 'home', component: ListComponent, resolve: {questions: ListResolver} },
  { path: 'blank', component: BlankComponent},
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
