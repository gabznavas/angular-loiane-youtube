import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.scss'
})
export class DataFormComponent implements OnInit {


  formulario!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // })

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    const payload = this.formulario.value

    this.httpClient.post('http://httpbin.org/post', payload)
      .subscribe({
        next: value => {
          console.log(value);
          this.formulario.reset()
          alert('submit feito!')
        },
        error: err => {
          console.log(err);
        }
      })
  }

  resetar() {
    this.formulario.reset()
  }
}
