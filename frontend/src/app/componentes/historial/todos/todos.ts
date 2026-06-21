import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {

  listaTodos = [
    {
      id: 1,
      titulo: "Primera tarea",
      descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      estado: "pendiente"
    },
    {
      id: 2,
      titulo: "Segunda tarea",
      descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      estado: "en progreso"
    },
    {
      id: 3,
      titulo: "Tercera tarea",
      descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      estado: "completada"
    },
    {
      id: 4,
      titulo: "Cuarta tarea",
      descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      estado: "pendiente"
    },
    {
      id: 5,
      titulo: "Quinta tarea",
      descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      estado: "en progreso"
    },
    {
      id: 6,
      titulo: "Sexta tarea",
      descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      estado: "completada"
    }
  ]
  historialModificacion=[
    {
      fecha:"20-10-2026",
      hora:"15:26"
    }
  ]
}
