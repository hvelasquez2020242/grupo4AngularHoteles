import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habitaciones } from '../models/habitacion.model';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  public url : String = 'http://localhost:3000/api'
  constructor(public _http: HttpClient) { }
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')

  obtenerHoteles(): Observable<any> {

    return this._http.get(this.url + '/obtenerHoteles', {headers: this.headersVariable });
  }

  agregarHotel(modeloHotel: Hotel, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);

    let parametros = JSON.stringify(modeloHotel);

    return this._http.post(this.url + '/agregarHotel', parametros, {headers: headersToken })
  }
  agregarHabitacion(modelHabitaciones: Habitaciones, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);

    let parametros = JSON.stringify(modelHabitaciones);

    return this._http.post(this.url + '/agregarHabitacion', parametros, {headers: headersToken})
  }
  obtenerHotelesId(idHotel): Observable<any>{
    return this._http.get(this.url + '/obtenerHotelId/' + idHotel, {headers: this.headersVariable})
  }
  obtenerHabitacionesSimple(idHotel): Observable<any>{
    return this._http.get(this.url + '/obtenerHabitacionesSimple/' +idHotel, {headers: this.headersVariable})
  }
  obtenerHabitacionesMedia(idHotel): Observable<any>{
    return this._http.get(this.url + '/obtenerHabitacionesMedia/' +idHotel, {headers: this.headersVariable})
  }
  obtenerHabitacionesLujosa(idHotel): Observable<any>{
    return this._http.get(this.url + '/obtenerHabitacionesLujosa/' +idHotel, {headers: this.headersVariable})
  }
  obtenerHospedados(token){
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/obtenerHospedados', {headers: headersToken})

  }
  buscarHhospedado(token, nombre){
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/obtnerUsuarioNombre/' + nombre, {headers: headersToken})

  }
}
