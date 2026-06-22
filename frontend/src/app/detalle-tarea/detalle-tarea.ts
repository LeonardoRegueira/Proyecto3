import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-detalle-tarea',
  imports: [CommonModule],
  templateUrl: './detalle-tarea.html',
  styleUrl: './detalle-tarea.css'
})
export class DetalleTarea implements OnInit {

  tarea: any = null;
  cargando = true;
  errorMensaje = '';

  constructor(
    private route: ActivatedRoute,
    private tareaService: TareaService
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.tareaService.buscarTareaPorId(id).subscribe({
      next: (respuesta) => {
        this.tarea = respuesta;
        this.cargando = false;
      },

      error: (error) => {
        console.error('Error al obtener tarea:', error);
        this.errorMensaje = 'No se pudo cargar la tarea';
        this.cargando = false;
      }
    });

  }
}