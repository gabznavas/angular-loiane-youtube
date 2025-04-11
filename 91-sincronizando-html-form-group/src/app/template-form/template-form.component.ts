import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { ViaCep } from './types'

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
    // console.log(form.value);
    // console.log(this.usuario);
    // console.log(form.control.invalid);
    // console.log(form.errors);

    const payload = {
      nome: this.usuario.nome,
      email: this.usuario.email,
      cep: this.usuario.cep,
      numero: this.usuario.numero,
      complemento: this.usuario.complemento,
      rua: this.usuario.rua,
      bairro: this.usuario.bairro,
      cidade: this.usuario.cidade,
      estado: this.usuario.estado,
    }

    this.httpClient.post('http://dns-do-servidor:8080/pessoa', payload)
      .subscribe(dados => console.log(dados))
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

  consultaCEP(cep: string, form: NgForm) {
    cep = cep.replaceAll(" ", "").replaceAll("-", "")

    const validaCep = /^[0-9]{8}$/;
    if (!cep && !validaCep.test(cep)) {
      return
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`

    this.resetaDadosEndereco(form)

    this.httpClient.get<ViaCep>(url)
      .subscribe(data => this.populaDados(data, form))
  }

  private populaDados(data: ViaCep, form: NgForm) {
    form.form.patchValue({
      endereco: {
        cep: data.cep,
        complemento: data.complemento,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.estado
      }
    })
  }


  private resetaDadosEndereco(form: NgForm) {
    form.form.patchValue({
      endereco: {
        cep: "",
        complemento: "",
        rua: "",
        bairro: "",
        cidade: "",
        estado: ""
      }
    })
  }
}
