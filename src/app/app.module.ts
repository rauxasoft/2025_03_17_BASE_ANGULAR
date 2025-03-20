import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListadoArbitrosComponent } from './components/listado-arbitros/listado-arbitros.component';
import { HomeComponent } from './components/home/home.component';
import { FichaArbitroComponent } from './components/ficha-arbitro/ficha-arbitro.component';
import { FichaEquipoComponent } from './components/ficha-equipo/ficha-equipo.component';
import { ListadoEquiposComponent } from './components/listado-equipos/listado-equipos.component';

import { SinoPipe } from './pipes/sino.pipe';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';

@NgModule({
  declarations: [AppComponent, ListadoArbitrosComponent, HomeComponent, FichaArbitroComponent, FichaEquipoComponent, ListadoEquiposComponent, SinoPipe, ClasificacionComponent],
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
