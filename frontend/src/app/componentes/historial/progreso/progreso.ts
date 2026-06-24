import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tarea, TareaService } from '../../../services/tarea.service';

@Component({
  selector: 'app-progreso',
  imports: [CommonModule],
  templateUrl: './progreso.html',
  styleUrl: './progreso.css',
})
export class Progreso implements OnInit {

  tareasEnProgreso: Tarea[] = [];
  cargando = true;
  errorMensaje = '';

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.tareaService.listarTareasPorEstado('en progreso').subscribe({
      next: (respuesta) => {
        this.tareasEnProgreso = respuesta;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al obtener tareas en progreso:', error);
        this.errorMensaje = 'No se pudieron cargar las tareas en progreso';
        this.cargando = false;
      }
    });
  }

}
