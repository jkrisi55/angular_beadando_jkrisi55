import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.less']
})
export class FormInputComponent {

  constructor() { }
  @Input() form_input_formatter_variable = 0;
  @Input() label? : string;

  name = new FormControl('');
}
