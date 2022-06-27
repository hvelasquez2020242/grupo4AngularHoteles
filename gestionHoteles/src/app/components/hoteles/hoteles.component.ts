import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/services/hotele.service';
import { Habitaciones } from '../../models/habitacion.model'
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss']
})
export class HotelesComponent implements OnInit {
  public hotelModelGet: any;
  public hotelModelGetId: Hotel;
  public habitacionesModelGetId: Habitaciones;
  public habitacionesModelGet: any;
  public habitacionesModelGetLujosa: any;
  public habitacionesModelGetMedia: any;



  constructor(private _HotelService: HotelService, private _usuarioService: UsuarioService,   private _router: Router    ) {
  this.hotelModelGetId = new Hotel(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    0,
    ''
  ),
  this.habitacionesModelGetId = new Habitaciones(
    '',
    '',
    0,
    '',
    '',
    '',
    ''
  )
  }

  ngOnInit(): void {
    this.getHoteles()
  }


  getHoteles() {
    this._HotelService.obtenerHoteles().subscribe({
      next: (response: any) => {
        console.log(response.hoteles);
        this.hotelModelGet = response.hoteles;
      },
      error: (err) =>{
        console.log(err);

      }
    })
  }
  getHotelesId(idHotel){
    this._HotelService.obtenerHotelesId(idHotel).subscribe({
      next: (response: any) =>{
        console.log(response);
        this.hotelModelGetId = response.hotel;

      },
      error: (err) =>{
        console.log(err);

      }
    })
  }
  getHabitacionesSimple(idHotel){
    this._HotelService.obtenerHabitacionesSimple(idHotel).subscribe({
      next: (response: any) =>{
        console.log(response.habitaciones);
        this.habitacionesModelGet = response.habitaciones;
      },
      error: (err)=>{
        console.log(err);

      }
    })
  }
  getHabitacionesMedia(idHotel){
    this._HotelService.obtenerHabitacionesMedia(idHotel).subscribe({
      next: (response: any) =>{
        console.log(response.habitaciones);
        this.habitacionesModelGetMedia = response.habitaciones;
      },
      error: (err)=>{
        console.log(err);

      }
    })
  }
  getHabitacionesLujosa(idHotel){
    this._HotelService.obtenerHabitacionesLujosa(idHotel).subscribe({
      next: (response: any) =>{
        console.log(response.habitaciones);
        this.habitacionesModelGetLujosa = response.habitaciones;
      },
      error: (err)=>{
        console.log(err);

      }
    })
  }
  eventosGet(){
    this._router.navigate(['/hotelesEventos/eventos']);
  }
}
