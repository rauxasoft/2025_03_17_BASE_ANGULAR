import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clasificacion } from '../model/clasificacion';
import { environment } from 'src/environments/environment';

const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class ClasificacionService {

  constructor(private http: HttpClient ) { }

  getAll(): Observable<Clasificacion[]>{
    return this.http.get<Clasificacion[]>(`${baseURL}/clasificaciones`);
  }

}
