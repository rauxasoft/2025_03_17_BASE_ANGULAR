import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arbitro } from '../model/arbitro';

@Injectable({
  providedIn: 'root'
})
export class ArbitroService {

  constructor(private http: HttpClient ) { }

  getAll(): Observable<Arbitro[]>{
    return this.http.get<Arbitro[]>("http://localhost:8080/arbitros");
  }

  getById(){

  }

}
