import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arbitro } from '../model/arbitro';
import { environment } from 'src/environments/environment';

const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class ArbitroService {

  constructor(private http: HttpClient ) { }

  getAll(): Observable<Arbitro[]>{
    return this.http.get<Arbitro[]>(`${baseURL}/arbitros`);
  }

  getById(id: number): Observable<Arbitro>{
    return this.http.get<Arbitro>(`${baseURL}/arbitros/${id}`);
  }

}
