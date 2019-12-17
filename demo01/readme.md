## Web Site Navigation
### Be navigable with Focus

Ricorda: lo screen reader è un ottimo test per vedere la navigabilità dei link.

* Non posso capire/vedere dove sono
* Il link Project nel menù non è focusabile
* Il pulsante Register non è propriamente impostato: (bad semantic html)
* Il pulsante Login non è focusabile
* E' bene indicare se si apre una nuova pagina, come è bene indicare la posizione corrente di un link di navigazione

## Order
### E' importante avere un ordine di navigazione

* Il sito presenta un ordine confusionario

## Headings

* Le intestazioni non vanno usate per formattare, soprattutto dentro dei tag paragrago

## Custom Element

* Se proprio devo usare un anchor tag element al posto di un button, allora usa i wai-aria con role="button" e tabindex="0"

## Forms

* Usa label con for e associale all'id del campo form
* Non sostituire le label con i placeholder ma usali entrambi
* Non fornire informazioni solo tramite colori (es. campi required ed errori contrassegnati in rosso)
* Usa fieldset e legend per raggruppare elementi logicamente uniti (es. dati carta credito)
* Permetti di aumentare il timer di compilazione
* Fornisci errori comprensibili e che suggeriscano il fix

## Contenuto Multimediale

Fai attenzione a contenuti multimediali e animazioni. Queste possono portare disturbi a persone foto sensibili, che hanno problemi riguardanti la sfera cognitiva o difficoltà a distingure i colori

* Se hai video, fornisci le trascrizioni o le caption a video (il cui testo sarà equivalente all'audio)
* Non affidarsi esclusivamente ai captions generati da YouTube
* Per i video, fornisci un "Audio Description" che spieghi il contesto di una scena

## Wai-Aria

Le più usate sono: `aria-label`, `aria-labelledby` che usa l'id ad es. di un tag `<p>` come caption,

* Usa il `role` (attributo aria) per assegnare un ruolo semantico e, a volte, è necessario settare il tabindex se il role è di tipo button