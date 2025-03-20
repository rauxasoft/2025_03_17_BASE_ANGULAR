import { Component, OnInit } from '@angular/core';
import { Clasificacion } from 'src/app/model/clasificacion';
import { ClasificacionService } from 'src/app/services/clasificacion.service';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent implements OnInit {

  clasificaciones: Clasificacion[] = undefined;
  filas = undefined;

  constructor(private clasificacionService: ClasificacionService) { }

  ngOnInit() {
    this.clasificacionService.getAll().subscribe(
      data => {
        this.clasificaciones = data;
        this.filas = Object.values(data);
      }
    );
  }

}
