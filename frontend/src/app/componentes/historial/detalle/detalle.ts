import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioConexion } from '../../../service/servicio-conexion';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-detalle',
  imports: [CommonModule],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle implements OnInit{
  constructor(
    private serviceConexion: ServicioConexion,
    private activeRoute: ActivatedRoute,
    private route: Router){}
tarea: any=null;
mensajeExito = '';
mostrarModalExito = false;

  leerTareaSegunId(){
    const id = Number(this.activeRoute.snapshot.params["id"]);
    this.serviceConexion.leerLasTareasSegunId(id)
    .subscribe(datos=>{this.tarea = datos})
  }
  modificar(id:number){
    this.route.navigate(["/historial/modificar", id])
  }
  eliminar(id:number){
    this.serviceConexion.eliminarTarea(id).subscribe(()=>{
      this.mensajeExito = 'Tarea eliminada correctamente.';
      this.mostrarModalExito = true;
    })
  }
  irAListaTareas(){
    this.mostrarModalExito = false;
    this.route.navigate(["/historial/todos"]);
  }
  ngOnInit(){
    this.leerTareaSegunId();
  }
}
