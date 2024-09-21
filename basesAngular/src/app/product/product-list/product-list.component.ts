import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

//*ngIf=true o false

  productos:any[]=[
   
    {
      "productoId":1,
      "Modelo": "Sentra",
      "Descripcion": "4 puertas",
      "Precio": 20000,
      "Year": 2023,
      "Marca": "Nissan",
      "Color": "Azul",
      "ImagenUrl": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg"
    },
    {
      "productoId":2,
      "Modelo": "Q3",
      "Descripcion": "4 puertas",
      "Precio": 30000,
      "Year": 2022,
      "Marca": "Audi",
      "Color": "Blanco",
      "ImagenUrl": "https://mediaservice.audi.com/media/cdb/data/053e359d-d223-49ed-9b41-2346d1525ef1.jpg"
    },
    {
      "productoId":3,
      "Modelo": "Rio",
      "Descripcion": "4 puertas",
      "Precio": 25000,
      "Year": 2023,
      "Marca": "Kia",
      "Color": "Negro",
      "ImagenUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnEFAJK3u6QRkfaFyB9zkqp090pgsaCk8r3w&s"
    },
  ]

}
