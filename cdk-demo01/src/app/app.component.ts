import { Component, OnInit } from '@angular/core';
import { PersoneService } from './persone.service';
import { Persona } from './persone';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>

    <div *ngIf="persone$ | async  as persone; else loading">
      <app-lista [lista]="persone"></app-lista>   
    </div>
    <ng-template #loading>
      <div>Loading...</div>
    </ng-template>
  `,
  styles: [`
  :host {
    display: block;
    padding: 1rem;
  }`]
})
export class AppComponent implements OnInit {
  title = 'Demo Cdk';
  persone$: Observable<Persona[]>;

  constructor(private personeService: PersoneService) {}

  ngOnInit() {
    this.persone$ = this.personeService.getPersone();
  }

}
