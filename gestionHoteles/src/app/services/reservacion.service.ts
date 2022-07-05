import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cantidadDias } from '../models/dias.model';
import { Hotel } from '../models/hotel.model';
import { Reservacion } from '../models/reservacion.model';
import { Hospedados } from '../models/hospedados.model';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
  public url: String = 'http://localhost:3000/api'
  constructor(public _http: HttpClient) { }
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')

  obtenerReservacionId(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/obtenerReservacionId', { headers: headersToken });

  }
  agregarReservacion(token, idHabitacion, cantidadDias): Observable<any> {
    let parametros = null;

    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.post(this.url + '/agregarReservacion/' + idHabitacion + '/' + cantidadDias, parametros, { headers: headersToken });
  }
  obtenerUser(token){
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/obtenerUsuariosId', {headers: headersToken})
  }
  agregarHospedaje(token, idReservacion){
    let parametros = null;

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.post(this.url + '/agregarHospedaje/' + idReservacion , parametros, {headers: headersToken})

  }
}
