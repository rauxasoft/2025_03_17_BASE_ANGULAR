import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arbitro } from 'src/app/model/arbitro';
import { ArbitroService } from 'src/app/services/arbitro.service';

@Component({
  selector: 'app-ficha-arbitro',
  templateUrl: './ficha-arbitro.component.html',
  styleUrls: ['./ficha-arbitro.component.css']
})
export class FichaArbitroComponent implements OnInit {

  arbitro: Arbitro = undefined;

  constructor(private route: ActivatedRoute, 
              private arbitroService: ArbitroService) { }

  ngOnInit(): void {
    
    // 1.- Recoger la id que me llega por la ruta y asignarla a this.id

      // a) Podemos recogerla de forma asíncrona

      // b) Podemos recogerla de forma síncrona X

      const id = this.route.snapshot.paramMap.get('id');

    // 2.- Utilizar el servicio de arbitroService.getById(this.id) para traerme el árbitro

    this.arbitroService.getById(Number(id)).subscribe(
      datos => this.arbitro = datos
    );

  }

}
