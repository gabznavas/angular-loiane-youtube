import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

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
}
