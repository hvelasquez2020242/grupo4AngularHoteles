import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotele.service';
import { Habitaciones } from 'src/app/models/habitacion.model';
import { ReservacionService } from 'src/app/services/reservacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-admin-hotel',
  templateUrl: './admin-hotel.component.html',
  styleUrls: ['./admin-hotel.component.scss']
})
export class AdminHotelComponent implements OnInit {
  public modelHabitacionPost: Habitaciones;
  public hospedajeModelGet: any;
  public token;

  constructor(private _usuarioService: UsuarioService, private _hotelService: HotelService, private _reservacionService: ReservacionService) {
    this.modelHabitacionPost = new Habitaciones(
      '',
      '',
      0,
      '',
      '',
      '',
      ''
    )
    this.token = this._usuarioService.getToken();

  }

  ngOnInit(): void {
    this.getHospedados();
  }
  postHabitacion() {
    this._hotelService.agregarHabitacion(this.modelHabitacionPost, this.token).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  getHospedados(){
    this._hotelService.obtenerHospedados(this.token).subscribe({
      next: (response: any)=>{
        console.log(response);
        this.hospedajeModelGet = response.hospedados
      },
      error: (err) =>{
        console.log(err);

      }
    })
  }
  getReservacion(){
  this._reservacionService.obtenerReservacion(this.token).subscribe({
    next: (response: any)=>{
      console.log(response);
    },
    error: (err) =>{
      console.log(err);

    }
  })
  }
}
