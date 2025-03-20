import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/model/partido';
import { PartidoService } from 'src/app/services/partido.service';

@Component({
  selector: 'app-listado-partidos',
  templateUrl: './listado-partidos.component.html',
  styleUrls: ['./listado-partidos.component.css']
})
export class ListadoPartidosComponent implements OnInit {

  partidos: Partido[] = undefined;
  displayedColumns:string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];

  constructor(private partidoService: PartidoService) { }

  ngOnInit() {

    this.partidoService.getAll().subscribe(
      data => {
        this.partidos = data;
      }
    );

  }

}
