import { Component, OnInit } from '@angular/core';
import { ServicioConexion } from '../../../service/servicio-conexion';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pendientes',
  imports: [CommonModule],
  templateUrl: './pendientes.html',
  styleUrl: './pendientes.css',
})
export class Pendientes implements OnInit{
  constructor(private serviceConexion: ServicioConexion, private router : Router){}
  listaTareasPendientes: any=[];
  leerTodasLasTareas() {
    this.serviceConexion.leerLasTareasPendientes()
      .subscribe(datos => { this.listaTareasPendientes = datos })
  }
      ngOnInit() {
    this.leerTodasLasTareas();
  }
  detalles(id:number){
    this.router.navigate(["/historial/detalle", id]);
  }
}
