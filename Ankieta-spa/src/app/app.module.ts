import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { QuestionnaireService } from './_services/questionnaire.service';

@NgModule({
   declarations: [
      AppComponent,
      CreateComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      QuestionnaireService
   ],
   bootstrap: [
      AppComponent,
      CreateComponent,
   ]
})
export class AppModule { }
