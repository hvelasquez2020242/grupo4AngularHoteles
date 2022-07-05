import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/services/hotele.service';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  public hotelModelPost: Hotel;
  public token;
  public hotelModelGet: any;


  constructor(private _HotelService: HotelService) {

    this.hotelModelPost = new Hotel(
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
    )
    }

  ngOnInit(): void {
  }

  getHoteles() {
    this._HotelService.obtenerHoteles().subscribe({
      next: (response: any) => {
        console.log(response.hoteles);
        this.hotelModelGet = response.hoteles;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  postHoteles() {
    this._HotelService.agregarHotel(this.hotelModelPost, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getHoteles();
        this.hotelModelPost.nombre = "";
        this.hotelModelPost.direccion = "";
        this.hotelModelPost.descripcion = "";
        this.hotelModelPost.administrador = "";
        this.hotelModelPost.password = "";
        this.hotelModelPost.rol = "";
        this.hotelModelPost.idioma = "";
        this.hotelModelPost.telefono = 0;
        this.hotelModelPost.puesto = "";
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }
}
