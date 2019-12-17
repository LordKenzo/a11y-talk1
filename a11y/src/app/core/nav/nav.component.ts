import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <nav>
    <div class="nav-wrapper">
      <a href="#" data-target="mobile-demo" class="sidenav-trigger" style="display: inherit;"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a [routerLink]="'/'">Home</a></li>
        <li><a routerLink="/magazine">Magazine</a></li>
        <mat-slider aria-label="Stato dei tuoi occhi" 
          [thumbLabel]="true" min="0" max="9" step="1" value="5" (change)="changeEye($event)" ></mat-slider>
      </ul>
    </div>
    <ul class="sidenav" id="mobile-demo">
      <li><a routerLink="">Home</a></li>
      <li><a routerLink="magazine">Magazine</a></li>
      <li><a href="https://google.com">Google</a></li>
      <li><a href="https://angular.io">Angular</a></li>
    </ul>
  </nav>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  @Output() eyeChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  changeEye(e) {
    this.eyeChange.emit(e.value);
  }

}
