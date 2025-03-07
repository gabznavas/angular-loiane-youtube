import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean) {
    if(!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateREf)
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateREf: TemplateRef<any>,
    private viewContainerRef : ViewContainerRef,
  ) { }

}
