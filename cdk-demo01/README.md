# Creazione e installazione del progetto 
## Utilizzo di @angular/material e @angular/cdk

```
ng new cdk-demo01 --minimal --skipTests
cd cdk-demo01
ng add @angular/material
```

* Puoi a scelta usare CSS o SASS o quello che desideri.
* Puoi omettere la creazione del modulo di routing per semplicità.

## Generazione dei componenti

Generiamo il componente Lista ed il componente Elemento:

```
ng g c lista -it -is --flat
ng g c elemento -it -is --flat
```

Per brevità verrano creati nella root di app, con template e style inline.

Generiamo un Service per ottenere dei dati fake ed una interfaccia Persona:

```
ng g s persone
ng g i persona
```

```js
export interface Persona {
    id: number;
    nome: string;
    cognome: string;
}
```

Creo in assets un file fake:

```json
[
    {
        "id": 1,
        "nome": "Lorenzo",
        "cognome": "Franceschini"
    },
    {
        "id": 2,
        "nome": "Fabio",
        "cognome": "Biondi"
    },
    {
        "id": 3,
        "nome": "Luciano",
        "cognome": "Murruni"
    }
]
```

ed il mio service sarà (ometto le import e decoratori):

```js
export class PersoneService {

  constructor(private http: HttpClient) { }

  getPersone(): Observable<Persona[]> {
    return this.http.get<Persona[]>('../assets/persone.json');
  }
}
```

# Implementa ListKeyManager
## Versione con FocusKeyManager

Il FocusKeyManager implementa la tecnica Roving TabIndex, in cui l'idea è quella di rendere un elemento "focusabile" solo attraverso le Arrow Keys e non il Tab. Si hanno tutti gli elementi a tabindex="-1" e si imposta manualmente il tabindex="0" sull'elemento che riceve il focus.

Implementiamo questa gestione grazie a CDK:

Step uno (fai una QueryList degli elementi da gestire della lista):

```js
@ViewChildren(ElementoComponent) elementi: QueryList<ElementoComponent>;
```

Step due (inizializza il KeyManager). Grazie al `withWrap()` una volta raggiunto il fine lista ritorno al primo elemento:

```js
import { FocusKeyManager } from '@angular/cdk/a11y';
...
private keyManager: FocusKeyManager<ElementoComponent>;
...
ngAfterViewInit() {
    this.keyManager = new FocusKeyManager(this.elementi).withWrap();
}
```

Step tre (invia gli eventi dal componente Lista al ListKeyManager). ENTER sarà una costante che vado a importare da `import { ENTER } from '@angular/cdk/keycodes';`:

```js
@HostListener('keydown', ['$event'])
  onKeydown(event) {
    if(event.keyCode === ENTER) {
      this.selected = this.keyManager.activeItem.elemento;
    } else {
      this.keyManager.onKeydown(event);
    }
  }
```

Ora devi implementare l'interfaccia `FocusableOption` in Elemento definendo il metodo `focus`. Ricorda che dovrò far si che gli elementi abbiano tabindex="-1" per non essere focusabili con TAB:

```js
export class ElementoComponent implements FocusableOption {
  @Input() elemento: Persona;

  constructor(private element: ElementRef) {
  }

  focus() {
    this.element.nativeElement.focus();
  }

}
```

## Attributi Aria

Per Lista:

```
host: {
    tabindex: '0',
    role: 'list',
  },
```

Per Elemento:

```
host: {
    tabindex: '-1',
    role: 'list-item',
  },
```

## Stili

Per AppComponenet:

```
styles: [`
  :host {
    display: block;
    padding: 1rem;
  }`]
```

Per Lista:

```
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
```

Per Elemento:

```
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
```