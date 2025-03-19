import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoArbitrosComponent } from './components/listado-arbitros/listado-arbitros.component';
import { HomeComponent } from './components/home/home.component';
import { FichaArbitroComponent } from './components/ficha-arbitro/ficha-arbitro.component';

@NgModule({
  declarations: [AppComponent, ListadoArbitrosComponent, HomeComponent, FichaArbitroComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
