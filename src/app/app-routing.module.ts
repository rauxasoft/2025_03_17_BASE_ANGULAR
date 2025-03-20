import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoArbitrosComponent } from './components/listado-arbitros/listado-arbitros.component';
import { HomeComponent } from './components/home/home.component';
import { FichaArbitroComponent } from './components/ficha-arbitro/ficha-arbitro.component';
import { FichaEquipoComponent } from './components/ficha-equipo/ficha-equipo.component';
import { ListadoEquiposComponent } from './components/listado-equipos/listado-equipos.component';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { ListadoPartidosComponent } from './components/listado-partidos/listado-partidos.component';

const routes: Routes = [
  { path: 'listado-arbitros', component: ListadoArbitrosComponent },
  { path: 'ficha-arbitro/:id', component: FichaEquipoComponent },

  { path: 'listado-equipos', component: ListadoEquiposComponent },
  { path: 'ficha-equipo/:id', component: FichaArbitroComponent },

  { path: 'listado-partidos', component: ListadoPartidosComponent },
  
  /// { path: 'ficha-partido/:id', component: FichaArbitroComponent },

  { path: 'clasificacion', component: ClasificacionComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
