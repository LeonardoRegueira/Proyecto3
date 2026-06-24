import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioConexion } from '../../../service/servicio-conexion';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle',
  imports: [],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle implements OnInit{
  constructor(
    private serviceConexion: ServicioConexion,
    private activeRoute: ActivatedRoute,
    private route: Router){}
tarea: any;

  leerTareaSegunId(){
    const id = Number(this.activeRoute.snapshot.params["id"]);
    this.serviceConexion.leerLasTareasSegunId(id)
    .subscribe(datos=>{this.tarea = datos})
  }
  modificar(id:number){
    this.route.navigate(["/modificar", id])
  }
  eliminar(id:number){
    this.serviceConexion.eliminarTarea(id).subscribe()
  }
  ngOnInit(){
    this.leerTareaSegunId();
  }
}
