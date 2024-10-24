import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosFilterPipe } from './product/productos-filter.pipe';
import { EjemploComponent } from './formularios/ejemplo/ejemplo.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';
import { ZodiacoComponent } from './formularios/zodiaco/zodiaco.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductosFilterPipe,
    EjemploComponent,
    CinepolisComponent,
    ZodiacoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
