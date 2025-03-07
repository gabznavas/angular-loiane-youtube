import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private elementRef:ElementRef,
    private renderer: Renderer2
  ) { 
    // forma insegura XSS
    //elementRef.nativeElement.style.backgroundColor = 'yellow';
    
    
    // boas práticas
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", 'yellow')
  }

}
