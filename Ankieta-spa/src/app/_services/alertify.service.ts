import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  message(message: string) {
    alertify.message(message);
  }
}
