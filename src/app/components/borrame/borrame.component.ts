import { Component, OnInit } from '@angular/core';
import { Arbitro } from 'src/app/model/arbitro';

@Component({
  selector: 'app-borrame',
  templateUrl: './borrame.component.html',
  styleUrls: ['./borrame.component.css']
})
export class BorrameComponent implements OnInit{
  
  arbitros:Arbitro[] = undefined;
  mostrarNombre = false;
  nombre = "Honorio";
  ciudades = ["Mataró", "Badalona", "Badajoz", "Ciudad Real"];

  ngOnInit() {
    
    this.arbitros = [
      {
        id: 12555,
        nombre: 'Pepe',
        apellido1: 'Gálvez',
        apellido2: 'Merino',
        colegio: 'Andaluz',
        fechaNacimiento: new Date(2000, 10, 24)
      },
      {
        id: 12545,
        nombre: 'Antonio',
        apellido1: 'Gálvez',
        apellido2: 'Merino',
        colegio: 'Andaluz',
        fechaNacimiento: new Date(2000, 10, 24)
      }
  
    ];

  }
  
  mostrarCiudades(){
    console.log(this.ciudades);
  }

  quitarUltimaCiudad(){
    let ciudad = this.ciudades.pop();
    console.log(ciudad);
  }
 
}
