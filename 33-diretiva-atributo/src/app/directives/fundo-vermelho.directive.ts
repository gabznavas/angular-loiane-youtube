import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[fundoVermelho]'
})
export class FundoVermelhoDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { 
 // forma insegura XSS
    //elementRef.nativeElement.style.backgroundColor = 'red';
    
    // boas práticas
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", 'red')
  }

}
