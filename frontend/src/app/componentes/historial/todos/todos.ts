import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioConexion } from '../../../services/servicio-conexion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit{
  constructor(private serviceConexion: ServicioConexion, private router : Router){}

  listaTareasTodas: any=[];
  leerTodasLasTareas(){
    this.serviceConexion.leerTodasLasTareas()
    .subscribe(datos=>{this.listaTareasTodas = datos})
  }
  ngOnInit() {
    this.leerTodasLasTareas();
  }
  detalles(id:number){
    this.router.navigate(["/historial/detalle", id]);
  }
}
