
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'


@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private url: string = "http://localhost/uhome/";

  constructor(private http: HttpClient) { }

  getState() {
    return this.http.get(this.url + 'menu.php?option=getState');
  }
  login(user,password) {
    return this.http.get(this.url + 'menu.php?option=login&user='+user+'&password='+password);
  }

  register(datos){
    console.log("1 dentro de funcion registro de cosmetico 1");
    return this.http.post(this.url + 'menu.php?option=register',
    '{ "data":' + JSON.stringify(datos) + '}');

  }
}
