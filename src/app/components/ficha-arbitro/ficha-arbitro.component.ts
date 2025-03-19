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
    
    const id = this.route.snapshot.paramMap.get('id'); // Esta línea es síncrona!

    this.arbitroService.getById(Number(id)).subscribe(
      datos => this.arbitro = datos
    );

  }

}
