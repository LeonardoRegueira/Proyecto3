import { Component } from '@angular/core';
import { ServicioConexion } from '../../../service/servicio-conexion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pendientes',
  imports: [],
  templateUrl: './pendientes.html',
  styleUrl: './pendientes.css',
})
export class Pendientes {
  constructor(private serviceConexion: ServicioConexion, private router : Router){}
  listaTareasPendientes: any;
  leerTodasLasTareas() {
    this.serviceConexion.leerLasTareasPendientes()
      .subscribe(datos => { this.listaTareasPendientes = datos })
  }
  detalles(id:number){
    this.router.navigate(["/detalle", id]);
  }
}
