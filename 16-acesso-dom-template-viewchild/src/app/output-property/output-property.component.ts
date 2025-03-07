import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.scss',
  // outputs: ['mudouValor']
})
export class OutputPropertyComponent {

  @Input('valorInicial') valorInicial: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput!: ElementRef


  incrementa() {
    this.campoValorInput.nativeElement.value++
    // this.valor++
    this.mudouValor.emit({ novoValor: this.campoValorInput.nativeElement.value })
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--
    // this.valor--
    this.mudouValor.emit({ novoValor: this.campoValorInput.nativeElement.value })
  }
}
