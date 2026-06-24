import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tarea, TareaService } from '../../../services/tarea.service';

@Component({
  selector: 'app-pendientes',
  imports: [CommonModule],
  templateUrl: './pendientes.html',
  styleUrl: './pendientes.css',
})
export class Pendientes implements OnInit {

  tareasPendientes: Tarea[] = [];
  cargando = true;
  errorMensaje = '';

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.tareaService.listarTareasPorEstado('pendiente').subscribe({
      next: (respuesta) => {
        this.tareasPendientes = respuesta;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al obtener tareas pendientes:', error);
        this.errorMensaje = 'No se pudieron cargar las tareas pendientes';
        this.cargando = false;
      }
    });
  }

}
