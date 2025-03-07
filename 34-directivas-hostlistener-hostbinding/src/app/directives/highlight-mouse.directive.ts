import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  // quando precisa de mais manipulações e tratamentos
  // @HostBinding('style.backgroundColor') get setColor() {
  //   return this.backgroundColor
  // }
  // private backgroundColor!: string;


  // constructor(
  //   private elementRef: ElementRef,
  //   private renderer: Renderer2,
  // ) { }


  @HostListener('mouseenter')
  onMouseOver() {
    //   this.renderer.setStyle(
    //     this.elementRef.nativeElement,
    //     "background-color",
    //     "yellow"
    //   )
    this.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    //   this.renderer.setStyle(
    //     this.elementRef.nativeElement,
    //     "background-color",
    //     "white"
    //   )
    this.backgroundColor = 'white'
  }

  @HostListener('click')
  onClick() {
    alert('fui clicado!')
  }
}
