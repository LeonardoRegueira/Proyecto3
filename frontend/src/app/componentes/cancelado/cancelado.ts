import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tarea, TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-cancelado',
  imports: [CommonModule],
  templateUrl: './cancelado.html',
  styleUrl: './cancelado.css',
})
export class Cancelado implements OnInit {

  tareasCanceladas: Tarea[] = [];
  cargando = true;
  errorMensaje = '';

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.tareaService.listarTareasPorEstado('cancelada').subscribe({
      next: (respuesta) => {
        this.tareasCanceladas = respuesta;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al obtener tareas canceladas:', error);
        this.errorMensaje = 'No se pudieron cargar las tareas canceladas';
        this.cargando = false;
      }
    });
  }

}
