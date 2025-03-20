import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arbitro } from '../model/arbitro';
import { environment } from 'src/environments/environment';
import { Equipo } from '../model/equipo';

const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient ) { }

  getAll(): Observable<Equipo[]>{
    return this.http.get<Equipo[]>(`${baseURL}/equipos`);
  }

  getById(id: number): Observable<Equipo>{
    return this.http.get<Equipo>(`${baseURL}/equipos/${id}`);
  }

}
