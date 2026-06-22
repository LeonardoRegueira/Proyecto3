import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Tarea {
  id?: number;
  titulo: string;
  descripcion: string;
  prioridad: 'Baja' | 'Media' | 'Alta';
  estado: 'Pendiente' | 'En Progreso' | 'Completada';
  fecha_creacion?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private localStorageKey = 'tareas_proyecto3';

  constructor() { }

  private obtenerTareasLocales(): Tarea[] {
    const tareasStorage = localStorage.getItem(this.localStorageKey);
    return tareasStorage ? JSON.parse(tareasStorage) : [];
  }

  agregarTarea(tarea: Tarea): Observable<Tarea> {
    const listaActual = this.obtenerTareasLocales();
    const nuevoId = listaActual.length > 0 ? Math.max(...listaActual.map(t => t.id || 0)) + 1 : 1;
    
    const tareaConId: Tarea = { ...tarea, id: nuevoId };
    listaActual.push(tareaConId);
    localStorage.setItem(this.localStorageKey, JSON.stringify(listaActual));

    console.log('Tarea guardada en LocalStorage:', tareaConId);
    return of(tareaConId);
  }
}