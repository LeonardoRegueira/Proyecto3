import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioConexion } from '../../../service/servicio-conexion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  constructor(private serviceConexion: ServicioConexion, private router : Router){}
  
  listaTareasTodas: any;
  leerTodasLasTareas(){
    this.serviceConexion.leerTodasLasTareas()
    .subscribe(datos=>{this.listaTareasTodas = datos})
  }
  detalles(id:number){
    this.router.navigate(["/detalle", id]);
  }
}
