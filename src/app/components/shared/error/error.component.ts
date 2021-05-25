import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  @Input() error: HttpErrorResponse;
  @Input() query: string;
  constructor() { }

  getErrorMessage() {
    const errorMessage = {
      404 : `Sorry! Seems that ${this.query} does not exist in the pokédex`,
      500: 'Your petition could not reach the server. Please try again later'
    }
    const defaultErrorMessage = 'Something went wrong. Please try again later.'

    return errorMessage[this.error.status] || defaultErrorMessage;
  }


}
