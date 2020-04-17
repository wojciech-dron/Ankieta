import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { QuestionnaireService } from './_services/questionnaire.service';
import { QuestionnaireComponent } from './Questionnaire/Questionnaire.component';
import { ShowQuestResolver } from './_resolvers/showQuestionnaire.resolver';
import { AlertifyService } from './_services/alertify.service';

@NgModule({
   declarations: [
      AppComponent,
      CreateComponent,
      QuestionnaireComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      QuestionnaireService,
      ShowQuestResolver,
      AlertifyService
   ],
   bootstrap: [
      AppComponent,
      // CreateComponent
   ]
})
export class AppModule { }
