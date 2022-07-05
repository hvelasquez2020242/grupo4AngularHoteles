import { Component, OnInit } from '@angular/core';
import { Reservacion } from 'src/app/models/reservacion.model';
import { ReservacionService } from 'src/app/services/reservacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.scss'],
  providers: [ReservacionService]
})
export class ReservacionesComponent implements OnInit {
  public token;
  public usuario: any;
  public reservacionModelGet: any;
  constructor(private _reservacionService: ReservacionService, private _usuarioService: UsuarioService) {

    this.token = this._usuarioService.getToken();

  }

  ngOnInit(): void {
    this.getUsuarioId();
    this.getUsuario();
  }

  getUsuarioId() {
    this._reservacionService.obtenerReservacionId(this.token).subscribe({
      next: (response: any) => {
        this.reservacionModelGet = response.reservacion;
        console.log(response.reservacion);

      }
    })
  }
  getUsuario(){
    this._reservacionService.obtenerUser(this.token).subscribe({
      next: (response: any) => {
        this.usuario = response.usuario.nombre
        console.log(response.usuario.nombre);

      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
