import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { ViaCepResult } from './types'

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  constructor(private httpClient: HttpClient) { }

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

  consultaCEP(cep: string) {
    cep = cep.replaceAll(" ", "").replaceAll("-", "")

    const validaCep = /^[0-9]{8}$/;
    if (!cep && !validaCep.test(cep)) {
      return
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`
    this.httpClient.get<ViaCepResult>(url)
      .subscribe(data => {
        this.usuario.bairro = data.bairro
        this.usuario.cep = data.cep
        this.usuario.complemento = data.complemento
        this.usuario.cidade = data.localidade
        this.usuario.estado = data.estado
        this.usuario.rua = data.logradouro
        this.usuario.estado = data.uf
      })
  }
}
