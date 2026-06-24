import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioConexion } from '../../service/servicio-conexion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar',
  imports: [FormsModule],
  templateUrl: './modificar.html',
  styleUrl: './modificar.css',
})
export class Modificar implements OnInit{
 tarea : any={};
 tareaId: Number=0;
 constructor(
  private serviceConexion: ServicioConexion,
  private activeRoute: ActivatedRoute,
  private router: Router){}
 ngOnInit(){
  this.tareaId = Number(this.activeRoute.snapshot.params["id"]);
  this.serviceConexion.leerLasTareasSegunId(this.tareaId)
  .subscribe(datos=>{this.tarea=datos})
  
 }
 guardarModificar(){
    this.serviceConexion.modificarTarea(this.tarea)
    .subscribe(()=>{
      this.router.navigate(["/historial/detalle",this.tarea.id]);
    });
  }
}
