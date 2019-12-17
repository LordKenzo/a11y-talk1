import { Persona } from './persone';
import { Component, OnInit, HostBinding, Input, ElementRef } from '@angular/core';
import { FocusableOption } from '@angular/cdk/a11y';

@Component({
  selector: 'app-elemento',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    tabindex: '-1',
    role: 'list-item',
  },
  styles: [`
  :host {
    display: block;
    margin: 1rem 0;
    padding: 1rem;
    background-color: #AA10FF;
    transition: all .6s;
    border-radius: 15px;
    outline: none;
    color: white;
  }

  :host(:focus) {
    background-color: #18AA1A;
    transform: translateX(.2rem);
  }`]
})
export class ElementoComponent implements FocusableOption {
  @Input() elemento: Persona;

  constructor(private element: ElementRef) {
  }

  focus() {
    this.element.nativeElement.focus();
  }

}
