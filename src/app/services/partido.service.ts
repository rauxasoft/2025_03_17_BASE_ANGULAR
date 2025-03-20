import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partido } from '../model/partido';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  constructor(private http: HttpClient ) { }
  
  getAll(): Observable<Partido[]>{
    return this.http.get<Partido[]>(`${baseURL}/partidos`);
  }

  getById(id: number): Observable<Partido>{
    return this.http.get<Partido>(`${baseURL}/partidos/${id}`);
  }

}
