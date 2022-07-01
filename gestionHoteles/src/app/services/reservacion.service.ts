import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservacion } from '../models/reservacion.model';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
  public url : String = 'http://localhost:3000/api'
  constructor(public _http: HttpClient) { }
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')

  obtenerReservacionId(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/obtenerReservacionId', {headers: headersToken });

  }

}
