import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TiporangofechaService {
  _url = '/payaraWSRBanguat/resources/generic?fechaInicio=01/07/2021&fechaFinal=10/07/2021'
  constructor
  (private http:HttpClient
  ) {   }

   getTipoRangoJava(){
     let header = new HttpHeaders()
     .set('Type-content', 'aplication/json')
     .set('Type-content', 'aplication/json')
     .set('Type-content', 'aplication/json')
     
      return this.http.get(this._url, {
        headers: header
      });
    }
}
