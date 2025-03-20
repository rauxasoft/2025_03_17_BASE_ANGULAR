import { Component, OnInit } from '@angular/core';
import { Clasificacion } from 'src/app/model/clasificacion';
import { ClasificacionService } from 'src/app/services/clasificacion.service';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent implements OnInit {

  filas = undefined;

  constructor(private clasificacionService: ClasificacionService) { }

  ngOnInit() {
    this.clasificacionService.getAll().subscribe(
      data => {

        this.filas = Object.values(data); 
  
        /*
        
        // el método values() extrae los valores de un objeto y prescinde de los atributos

        let productos = {
          "102": {"nombre": "Impresora HP"},
          "103": {"numero": 233},
         
          "104": {}
        }

        let valoresProductos: any[] = Object.values(productos);

        */
      }
    );
  }

}
