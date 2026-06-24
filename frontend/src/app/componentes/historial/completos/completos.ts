import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tarea, TareaService } from '../../../services/tarea.service';

@Component({
  selector: 'app-completos',
  imports: [CommonModule],
  templateUrl: './completos.html',
  styleUrl: './completos.css',
})
export class Completos implements OnInit {

  tareasCompletadas: Tarea[] = [];
  cargando = true;
  errorMensaje = '';

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.tareaService.listarTareasPorEstado('completada').subscribe({
      next: (respuesta) => {
        this.tareasCompletadas = respuesta;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al obtener tareas completadas:', error);
        this.errorMensaje = 'No se pudieron cargar las tareas completadas';
        this.cargando = false;
      }
    });
  }

}
