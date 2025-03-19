import { Component, OnInit } from '@angular/core';
import { Arbitro } from 'src/app/model/arbitro';
import { ArbitroService } from 'src/app/services/arbitro.service';

@Component({
  selector: 'app-listado-arbitros',
  templateUrl: './listado-arbitros.component.html',
  styleUrls: ['./listado-arbitros.component.css']
})
export class ListadoArbitrosComponent implements OnInit {

  arbitros:Arbitro[] = undefined;
  displayedColumns:string[] = ["ID","Nombre"];

  constructor(private arbitroService: ArbitroService) { }

  ngOnInit() {

    this.arbitroService.getAll().subscribe(
      data => {
        this.arbitros = data;
      }
    );

  }

}
