import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioConexion } from '../../service/servicio-conexion';

@Component({
  selector: 'app-ingreso-tarea',
  imports: [CommonModule, FormsModule],
  templateUrl: './ingreso-tarea.html',
  styleUrl: './ingreso-tarea.css',
})
export class IngresoTarea {
  constructor(
    private servicioConexion: ServicioConexion,
    private router: Router
  ) {}

  titulo = '';
  descripcion = '';
  nivel_prioridad = 'Baja';
  estado = 'pendiente';
  mensajeExito = '';
  mensajeError = '';
  mostrarModalExito = false;

  public guardar() {
    this.mensajeExito = '';
    this.mensajeError = '';
    this.mostrarModalExito = false;

    if (!this.titulo.trim() || !this.descripcion.trim()) {
      this.mensajeError = 'Completa el titulo y la descripcion si o si.';
      return;
    }

    const nueva_tarea = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      nivel_prioridad: this.nivel_prioridad,
      estado: this.estado
    };

    this.servicioConexion.ingresarTarea(nueva_tarea).subscribe({
      next: () => {
        this.mensajeExito = 'Tarea guardada correctamente.';
        this.mostrarModalExito = true;
        this.titulo = '';
        this.descripcion = '';
        this.nivel_prioridad = 'Baja';
        this.estado = 'pendiente';
      },
      error: () => {
        this.mensajeError = 'No se pudo guardar la tarea.';
      }
    });
  }

  public irAListaTareas() {
    this.mostrarModalExito = false;
    this.router.navigate(['/historial/todos']);
  }

  public cerrarModal() {
    this.mostrarModalExito = false;
  }
}
