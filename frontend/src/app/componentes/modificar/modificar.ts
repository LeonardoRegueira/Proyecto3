import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioConexion } from '../../service/servicio-conexion';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modificar',
  imports: [CommonModule, FormsModule],
  templateUrl: './modificar.html',
  styleUrl: './modificar.css',
})
export class Modificar implements OnInit{
 tarea : any={};
 tareaId: Number=0;
 mensajeExito = '';
 mensajeError = '';
 mostrarModalExito = false;
 constructor(
  private serviceConexion: ServicioConexion,
  private activeRoute: ActivatedRoute,
  private router: Router){}
 ngOnInit(){
  this.tareaId = Number(this.activeRoute.snapshot.params["id"]);
  this.serviceConexion.leerLasTareasSegunId(this.tareaId)
  .subscribe(datos=>{
    this.tarea=datos;
    this.tarea.nivel_prioridad = this.tarea.nivel_prioridad || 'Baja';
  })
  
 }
 guardarModificar(){
    this.mensajeExito = '';
    this.mensajeError = '';
    this.mostrarModalExito = false;

    this.serviceConexion.modificarTarea(this.tarea)
    .subscribe({
      next: () => {
        this.mensajeExito = 'Tarea modificada correctamente.';
        this.mostrarModalExito = true;
      },
      error: () => {
        this.mensajeError = 'No se pudo modificar la tarea.';
      }
    });
  }

  irAListaTareas(){
    this.mostrarModalExito = false;
    this.router.navigate(["/historial/todos"]);
  }
}
