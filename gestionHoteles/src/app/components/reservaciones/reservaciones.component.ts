import { Component, OnInit } from '@angular/core';
import { Reservacion } from 'src/app/models/reservacion.model';
import { ReservacionService } from 'src/app/services/reservacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';


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
        this.usuario = response.usuario
        console.log(response.usuario);

      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  postHospedaje(idReservacion){
    this._reservacionService.agregarHospedaje(this.token, idReservacion).subscribe({
      next: (response: any) =>{
        this.getUsuarioId();
        console.log(response);
        Swal.fire({
          title: 'Hospedado exitosamente',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error: (err) =>{
        Swal.fire({
          title: err.error.mensaje,
          icon: 'error',
          showConfirmButton: false,
          timer: 1500
        })

      }
    })
  }
}
