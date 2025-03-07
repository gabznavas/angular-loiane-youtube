import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[hightlight]'
})
export class HightlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @Input() defaultColor: string = 'white';
  @Input('hightlight') hightlightColor: string = 'yellow';

  @HostListener('mouseenter')
  onMouseOver() {
    this.backgroundColor = this.hightlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor
  }
}
