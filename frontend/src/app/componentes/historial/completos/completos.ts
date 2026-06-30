import { Component, OnInit } from '@angular/core';
import { ServicioConexion } from '../../../services/servicio-conexion';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-completos',
  imports: [CommonModule],
  templateUrl: './completos.html',
  styleUrl: './completos.css',
})
export class Completos implements OnInit{
  constructor(private serviceConexion: ServicioConexion, private router : Router){}
    listaTareaCompletas: any=[];
    leerTodasLasTareas() {
      this.serviceConexion.leerLasTareasCompletos()
        .subscribe(datos => { this.listaTareaCompletas = datos })
    }
    ngOnInit() {
    this.leerTodasLasTareas();
  }
  detalles(id:number){
    this.router.navigate(["/historial/detalle", id]);
  }
}
