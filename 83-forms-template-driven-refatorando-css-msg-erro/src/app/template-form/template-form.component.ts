import { Component } from '@angular/core';
import { Form, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  usuario = {
    nome: '',
    email: '',
    cep: '',
    numero: '',
    complemento: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
    console.log(this.usuario);
    console.log(form.control.invalid);
    console.log(form.errors);
  }

  aplicaCssErroInput(campo: NgModel) {
    return {
      'is-invalid': !campo.valid && campo.touched
    }
  }

  isInvalidAndToucheded(campo: NgModel): boolean {
    const campoIsRequired = (!campo.valid || false)
    const campoIsTouched = (campo.touched || false);
    return campoIsRequired && campoIsTouched
  }
}
