import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    var usuario = prompt("Introduzca su usuario");
    var contraseña = prompt ("Introduzca su contraseña");
    alert("Bienvenido "+usuario);
  }
}
