
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import {url} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private url1: string = url;

  constructor(private http: HttpClient) { }

  getState() {
    return this.http.get(this.url1 + 'menu.php?option=getState');
  }
  login(user,password) {
    return this.http.get(this.url1 + 'menu.php?option=login&user='+user+'&password='+password);
  }

  register(datos){
    console.log("1 dentro de funcion registro de cosmetico 1");
    return this.http.post(this.url1 + 'menu.php?option=register',
    '{ "data":' + JSON.stringify(datos) + '}');

  }
}
