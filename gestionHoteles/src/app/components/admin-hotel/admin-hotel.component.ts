import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotele.service';
import { Habitaciones } from 'src/app/models/habitacion.model';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-admin-hotel',
  templateUrl: './admin-hotel.component.html',
  styleUrls: ['./admin-hotel.component.scss']
})
export class AdminHotelComponent implements OnInit {
  public modelHabitacionPost: Habitaciones;
  public token;

  constructor(private _usuarioService: UsuarioService, private _hotelService: HotelService) {
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

      },
      error: (err) =>{
        console.log(err);

      }
    })
  }
}
