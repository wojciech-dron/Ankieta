import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { QuestionnaireService } from './_services/questionnaire.service';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireResolver } from './_resolvers/questionnaire.resolver';
import { AlertifyService } from './_services/alertify.service';
import { VoteComponent } from './questionnaire/vote/vote.component';
import { ResultComponent } from './questionnaire/result/result.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { ListResolver } from './_resolvers/list.resolver';

@NgModule({
   declarations: [
      AppComponent,
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
