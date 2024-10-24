import { Component} from '@angular/core';

@Component({
  selector: 'app-temap',
  standalone: true,
  imports: [TemapComponent],
  templateUrl: './temap.component.html',
  styles: ``
})
export class TemapComponent {
  title= 'Hola desde papá';
  mensaje2:string=""
  recibirMensaje(mensaje:string){
    this.mensaje2=mensaje
  }
}
