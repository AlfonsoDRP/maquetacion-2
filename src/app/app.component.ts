import { Component } from '@angular/core';
import listaproductos from 'src/assets/json/productos.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maquetacion-2';
  productos : any = listaproductos;
  public searching: boolean = false;
  public showSearchResults(event: any): void {
    if (event.target.value.length >= 3) {
      this.searching = true;
    } else {
      this.searching = false;
    }
  }
  
}
