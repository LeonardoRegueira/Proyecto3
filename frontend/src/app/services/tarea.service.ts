import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type EstadoTarea = 'pendiente' | 'en progreso' | 'completada' | 'cancelada';

export interface Tarea {
  _id?: string;
  id?: number;
  titulo: string;
  descripcion?: string;
  estado: EstadoTarea;
  prioridad?: 'Baja' | 'Media' | 'Alta';
  fecha_creacion?: string;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private apiUrl = 'http://localhost:3000/tareas';

  constructor(private http: HttpClient) {}

  listarTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl);
  }

  buscarTareaPorId(id: number): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.apiUrl}/${id}`);
  }

  listarTareasPorEstado(estado: EstadoTarea): Observable<Tarea[]> {
    const estadoUrl = encodeURIComponent(estado);
    return this.http.get<Tarea[]>(`${this.apiUrl}/estado/${estadoUrl}`);
  }

  agregarTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.apiUrl, tarea);
  }
}
