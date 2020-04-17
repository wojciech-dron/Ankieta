import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ShowQuestionnaireComponent } from './showQuestionnaire/showQuestionnaire.component';
import { ShowQuestResolver } from './_resolvers/showQuestionnaire.resolver';


export const routes: Routes = [
  { path: 'home', component: CreateComponent},
  { path: 'questionnaire/:id', component: ShowQuestionnaireComponent,
      resolve: {questionnaire: ShowQuestResolver} },
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
