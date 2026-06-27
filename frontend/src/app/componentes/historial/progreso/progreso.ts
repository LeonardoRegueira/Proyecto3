import { Component, OnInit } from '@angular/core';
import { ServicioConexion } from '../../../service/servicio-conexion';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progreso',
  imports: [CommonModule],
  templateUrl: './progreso.html',
  styleUrl: './progreso.css',
})
export class Progreso implements OnInit {
  constructor(private serviceConexion: ServicioConexion, private router : Router){}
    listaTareasProgreso: any=[];
    leerTodasLasTareas() {
      this.serviceConexion.leerLasTareasEnProgreso()
        .subscribe(datos => { this.listaTareasProgreso = datos })
    }
    ngOnInit() {
    this.leerTodasLasTareas();
  }
  detalles(id:number){
    this.router.navigate(["/historial/detalle", id]);
  }
}
