import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  user:any;


  constructor() { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem("user"));

  }

}
