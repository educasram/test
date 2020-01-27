import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { ConexionService } from 'src/app/conexion.service';
import Swal from 'sweetalert2'




@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public model: any;
  public states=[];
  f: string = "fornot";

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  constructor(private conexion:ConexionService) { }

  ngOnInit() {
    this.buscaEstado();
    
  }

  buscaEstado(){
    this.states=[];
    console.log('cambio');
    this.conexion.getState().subscribe(res=>{
      var t:any;
      t=res;
      t.forEach(element => {
        console.log(t);
        this.states.push(element.vista);
        
      });
      
      
    })

  }

  cambiaEstado() { 
    this.f = "formulario"
  }
  
  verVideo(){
    Swal.fire({
      html:
      '<video style="width:80%;" src="http://trato-hecho.com/tratohechov4.mp4" controls>'+
    '</video>',
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
      focusConfirm: false,
      confirmButtonText:
        '',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '',
      cancelButtonAriaLabel: ''
    })
  }

}
