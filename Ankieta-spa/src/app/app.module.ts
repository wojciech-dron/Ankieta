import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app';
import { CreateComponent } from './_components/create/create.component';
import { QuestionnaireService } from './_services/questionnaire.service';
import { QuestionnaireComponent } from './_components/questionnaire/questionnaire.component';
import { QuestionnaireResolver } from './_resolvers/questionnaire.resolver';
import { AlertifyService } from './_services/alertify.service';
import { VoteComponent } from './_components/questionnaire/vote/vote.component';
import { ResultComponent } from './_components/questionnaire/result/result.component';
import { NavComponent } from './_components/nav/nav.component';
import { ListComponent } from './_components/list/list.component';
import { ListResolver } from './_resolvers/list.resolver';
import { BlankComponent } from './_components/blank/blank.component';

@NgModule({
   declarations: [
      AppComponent,
      BlankComponent,
      CreateComponent,
      QuestionnaireComponent,
      VoteComponent,
      ResultComponent,
      NavComponent,
      ListComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      QuestionnaireService,
      QuestionnaireResolver,
      ListResolver,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
