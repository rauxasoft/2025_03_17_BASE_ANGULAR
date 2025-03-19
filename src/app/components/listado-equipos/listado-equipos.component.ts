import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/model/equipo';
import { EquipoService } from 'src/app/services/equipo-service'


@Component({
  selector: 'app-listado-equipos',
  templateUrl: './listado-equipos.component.html',
  styleUrls: ['./listado-equipos.component.css']
})
export class ListadoEquiposComponent implements OnInit {

  equipos:Equipo[] = undefined;
  displayedColumns:string[] = ["id","nombre", "cff"];

  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {

    this.equipoService.getAll().subscribe(
      data => {
        this.equipos = data;
      }
    );

  }

}
