import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-temah',
  standalone: true,
  imports: [],
  templateUrl: './temah.component.html',
  styles: ``
})
export class TemahComponent {
  @Input() mensaje!: string;

  @Output() mensajeCiclado=new EventEmitter<string>();
   enviarMensaje(){
    this.mensaje.emit('Hola mundo desde el hijo');
   }
}
