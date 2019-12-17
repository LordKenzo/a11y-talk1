import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persona } from './persone';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersoneService {

  constructor(private http: HttpClient) { }

  getPersone(): Observable<Persona[]> {
    return this.http.get<Persona[]>('../assets/persone.json').pipe(
      delay(100)
    );
  }
}
