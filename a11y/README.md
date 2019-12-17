# A11y

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Material

Install Angular Material with HammerJS for gesture and Indigo/Pink theme:

```
ng add @angular/material
```

Create a Core Module with a Nav Component:

```
ng g m core
ng g c core/nav -it -is --skipTests
```

Import CoreModule and add in declaration our NavComponent inside AppModule. Remember to export NavComponent from CoreModule.

Create a module SharedModule and import it in AppModule, then I'll create the directive for blur effects:

```
ng g m shared --module=App
ng g d shared/eyeBlur --skipTests
```

In SharedModule I will add all my Material Module.

Create my Feature Module Magazine:

```
ng g m magazine --routing --module=App
```

Create three components magazine, article and liker:

```
ng g c magazine/container/magazine --module=Magazine --skipTests
ng g c magazine/components/article --module=Magazine --skipTests
ng g c liker --module=Shared --skipTests
```

## Working in progress

Ho aggiunto il mio file CSS ed uno script esterno per l'apertura del menu