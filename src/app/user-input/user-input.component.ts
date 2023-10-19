import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  submitInput: string = '';

  @Output() textSubmitted = new EventEmitter<string>();

  submitText() {
    this.textSubmitted.emit(this.submitInput);
    this.submitInput = ' ';
  }
}
