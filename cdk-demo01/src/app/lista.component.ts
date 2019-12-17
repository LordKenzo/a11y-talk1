import { ElementoComponent } from './elemento.component';
import { Component, Input, ViewChildren, QueryList, HostListener, AfterViewInit } from '@angular/core';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';
import { Persona } from './persone';

@Component({
  selector: 'app-lista',
  template: `
    <app-elemento [elemento]="elemento" *ngFor="let elemento of lista" (click)="selected=elemento">
      <p>Cognome: {{elemento.cognome}}</p>
    </app-elemento>

    <hr>
    <div class="detail" *ngIf="selected; else nothing">
      <p>Id: {{selected.id}}</p>
      <p>Nome: {{selected.nome}}</p>
      <p>Cognome: {{selected.cognome}}</p>
    </div>
    <ng-template #nothing>Nessuna Persona Selezione</ng-template>
  `,
  host: { 
    tabindex: '0',
    role: 'list' 
  },
  styles: [`
    :host {
      margin: 0 auto;
      display: block;
      max-width: 20rem;
    }
    .detail {
      display: block;
      margin: 1rem 0;
      padding: 1rem;
      background-color: #AA10FF;
      transition: all .6s;
      border-radius: 15px;
      outline: none;
      color: white;
    }
  `]
})
export class ListaComponent implements AfterViewInit {
  @Input() lista = [];
  @ViewChildren(ElementoComponent) elementi: QueryList<ElementoComponent>;
  private keyManager: FocusKeyManager<ElementoComponent>;
  selected: Persona;
  
  constructor() { }

  ngAfterViewInit() {
    this.keyManager = new FocusKeyManager(this.elementi).withWrap();
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event) {
    if(event.keyCode === ENTER) {
      this.selected = this.keyManager.activeItem.elemento;
    } else {
      this.keyManager.onKeydown(event);
    }
  }

}
