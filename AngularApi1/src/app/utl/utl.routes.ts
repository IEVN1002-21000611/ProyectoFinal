import { Routes } from "@angular/router"
export default[
    {
        path: 'listaAlumnos',
        loadComponent:()=>import('./alumnos/alumnos.component')
    }
]