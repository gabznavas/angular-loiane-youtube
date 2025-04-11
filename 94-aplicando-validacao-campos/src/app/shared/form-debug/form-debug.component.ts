import { Component, Input } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrl: './form-debug.component.scss'
})
export class FormDebugComponent {

  @Input() form: NgForm | undefined;
  @Input() formReactive: FormGroup | undefined;
}
