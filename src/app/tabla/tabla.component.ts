import { Component, OnInit } from '@angular/core';
import listaproductos from 'src/assets/json/productos.json';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  productos : any = listaproductos;
  constructor() { }

  ngOnInit(): void {
  }

}
