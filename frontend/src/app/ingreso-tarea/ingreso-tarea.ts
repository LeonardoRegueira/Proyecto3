import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TareaService, Tarea } from '../services/tarea.service';

@Component({
  selector: 'app-ingreso-tarea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ingreso-tarea.html', 
  styleUrls: ['./ingreso-tarea.css']    
})
export class AppIngresoTareaComponent implements OnInit {
  tareaForm!: FormGroup;
  mensajeExito: boolean = false;

  constructor(
    private fb: FormBuilder,
    private tareaService: TareaService
  ) {}

  ngOnInit(): void {
    this.tareaForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required]],
      prioridad: ['Media', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.tareaForm.valid) {
      const fechaActual = new Date().toISOString().split('T')[0];

      const nuevaTarea: Tarea = {
        titulo: this.tareaForm.value.titulo.trim(),
        descripcion: this.tareaForm.value.descripcion.trim(),
        prioridad: this.tareaForm.value.prioridad,
        estado: 'pendiente',
        fecha_creacion: fechaActual
      };

      this.tareaService.agregarTarea(nuevaTarea).subscribe({
        next: (response) => {
          this.mensajeExito = true;
          this.tareaForm.reset({ prioridad: 'Media' });
          setTimeout(() => this.mensajeExito = false, 3500);
        },
        error: (err) => console.error('Error al guardar la tarea:', err)
      });
    } else {
      this.tareaForm.markAllAsTouched();
    }
  }
}
