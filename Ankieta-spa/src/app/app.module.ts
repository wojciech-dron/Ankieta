import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { QuestionnaireService } from './_services/questionnaire.service';
import { ShowQuestionnaireComponent } from './showQuestionnaire/showQuestionnaire.component';
import { ShowQuestResolver } from './_resolvers/showQuestionnaire.resolver';

@NgModule({
   declarations: [
      AppComponent,
      CreateComponent,
      ShowQuestionnaireComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      QuestionnaireService,
      ShowQuestResolver
   ],
   bootstrap: [
      AppComponent,
      // CreateComponent
   ]
})
export class AppModule { }
