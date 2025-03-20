import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lance, Partido } from 'src/app/model/partido';
import { PartidoService } from 'src/app/services/partido.service';

@Component({
  selector: 'app-ficha-partido',
  templateUrl: './ficha-partido.component.html',
  styleUrls: ['./ficha-partido.component.css']
})
export class FichaPartidoComponent implements OnInit {

  partido: Partido = undefined;
  lances: Lance[] = undefined;
  displayedColumns = ["minuto", "tipoLance", "comentario", "icono"]
  
  constructor(private route: ActivatedRoute, 
              private partidoService: PartidoService) { }
  
  ngOnInit(): void {
      
    const id = this.route.snapshot.paramMap.get('id'); // Esta línea es síncrona!
  
    this.partidoService.getById(Number(id)).subscribe(
      datos => {
        this.partido = datos
        this.lances = this.partido.lances;
        this.lances.reverse();
      }
       
    );
  
  }
}
