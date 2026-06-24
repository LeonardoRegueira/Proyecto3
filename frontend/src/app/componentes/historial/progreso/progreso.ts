import { Component } from '@angular/core';
import { ServicioConexion } from '../../../service/servicio-conexion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progreso',
  imports: [],
  templateUrl: './progreso.html',
  styleUrl: './progreso.css',
})
export class Progreso {
  constructor(private serviceConexion: ServicioConexion, private router : Router){}
    listaTareasProgreso: any;
    leerTodasLasTareas() {
      this.serviceConexion.leerLasTareasEnProgreso()
        .subscribe(datos => { this.listaTareasProgreso = datos })
    }
    detalles(id:number){
    this.router.navigate(["/detalle", id]);
  }
}
