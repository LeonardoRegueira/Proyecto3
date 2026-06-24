import { Component } from '@angular/core';
import { ServicioConexion } from '../../../service/servicio-conexion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completos',
  imports: [],
  templateUrl: './completos.html',
  styleUrl: './completos.css',
})
export class Completos {
  constructor(private serviceConexion: ServicioConexion, private router : Router){}
    listaTareaCompletas: any;
    leerTodasLasTareas() {
      this.serviceConexion.leerLasTareasCompletos()
        .subscribe(datos => { this.listaTareaCompletas = datos })
    }
    detalles(id:number){
    this.router.navigate(["/detalle", id]);
  }
}
