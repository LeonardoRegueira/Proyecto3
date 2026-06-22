import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaService } from '../../../services/tarea.service';

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit {

  listaTodos: any[] = [];
  cargando = true;
  errorMensaje = '';

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.tareaService.listarTareas().subscribe({
      next: (respuesta) => {
        this.listaTodos = respuesta as any[];
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al obtener tareas:', error);
        this.errorMensaje = 'No se pudieron cargar las tareas';
        this.cargando = false;
      }
    });
  }
}
