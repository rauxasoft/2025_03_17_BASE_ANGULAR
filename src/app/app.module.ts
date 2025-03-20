import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Módulos de Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

import { ListadoArbitrosComponent } from './components/listado-arbitros/listado-arbitros.component';
import { HomeComponent } from './components/home/home.component';
import { FichaArbitroComponent } from './components/ficha-arbitro/ficha-arbitro.component';
import { FichaEquipoComponent } from './components/ficha-equipo/ficha-equipo.component';
import { ListadoEquiposComponent } from './components/listado-equipos/listado-equipos.component';

import { SinoPipe } from './pipes/sino.pipe';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { ListadoPartidosComponent } from './components/listado-partidos/listado-partidos.component';
import { FichaPartidoComponent } from './components/ficha-partido/ficha-partido.component';
import { LanceIconComponent } from './components/lance-icon/lance-icon.component';

@NgModule({
  declarations: [
    AppComponent, 
    ListadoArbitrosComponent, 
    HomeComponent, 
    FichaArbitroComponent, 
    FichaEquipoComponent, 
    ListadoEquiposComponent, 
    SinoPipe, 
    ClasificacionComponent, 
    ListadoPartidosComponent, 
    FichaPartidoComponent, 
    LanceIconComponent
  ],
  imports: [
            BrowserModule, 
            AppRoutingModule, 
            HttpClientModule, 
            BrowserAnimationsModule,
            MatProgressSpinnerModule,
            MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
