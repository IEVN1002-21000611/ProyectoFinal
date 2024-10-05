import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  name: string = '';
  numCompra: number | null = null;
  cineco: string = '';
  numTickets: number | null = null;

  totalBoletos: number | null = null;
  precioFinal: number | null = null;

  procesarFormulario(): void {
    if (!this.name || this.numCompra === null || this.numTickets === null) {
      alert("Por favor, complete todos los campos correctamente.");
      return;
    }
    
    const limiteBoletos = this.numCompra * 7;
    
    if (this.numTickets > limiteBoletos) {
      alert(`Puede comprar hasta ${limiteBoletos} boletos para ${this.numCompra} comprador(es).`);
      return;
    }

    const precioPorBoleto = 12; 
    let descuento = 1; 
    if (this.numTickets > 5) {
      descuento = 0.85;  
    }

    if (this.cineco.toLowerCase() === 'si') {
      descuento *= 0.90;  
    }
    const precioTotal = this.numTickets * precioPorBoleto;
    const precioDescuento = precioTotal * descuento;

    this.precioFinal = parseFloat(precioDescuento.toFixed(2));  
    this.totalBoletos = this.numTickets;
  }
}
