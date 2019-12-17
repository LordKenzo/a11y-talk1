import { Directive, ElementRef, Renderer2, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appEyeBlur]'
})
export class EyeBlurDirective implements OnInit, OnChanges {

  @Input('appEyeBlur') eyeValue;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

   ngOnInit() {
    this.changeValue();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.eyeValue) {
      this.changeValue();
    }
  }

  changeValue() {
    this.renderer.setStyle(this.el.nativeElement, 'filter', `blur(${this.eyeValue}px)`);
  }

}
