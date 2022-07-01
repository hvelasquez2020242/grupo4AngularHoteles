import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { HomeComponent } from './components/home/home.component';
import { IndefinidoComponent } from './components/indefinido/indefinido.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { HotelesEventosComponent } from './components/hoteles-eventos/hoteles-eventos.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegistroComponent,
    HotelesComponent,
    HomeComponent,
    IndefinidoComponent,
    EventosComponent,
    HotelesEventosComponent,
    ReservacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
