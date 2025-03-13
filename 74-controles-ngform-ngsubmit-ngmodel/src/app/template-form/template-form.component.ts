import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
