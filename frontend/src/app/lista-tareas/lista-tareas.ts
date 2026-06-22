import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-lista-tareas',
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.css'
})
export class ListaTareas implements OnInit {

  tareas: any[] = [];
  cargando = true;
  errorMensaje = '';

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.tareaService.listarTareas().subscribe({
      next: (respuesta) => {
        this.tareas = respuesta as any[];
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