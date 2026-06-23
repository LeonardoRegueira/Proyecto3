import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

export interface Tarea {
  _id?: string; 
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
  private apiUrl = 'http://localhost:3000/api/tareas';

  constructor(private http: HttpClient) { } 

  obtenerTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl);
  }

  agregarTarea(tarea: Tarea): Observable<Tarea> {
    console.log('Enviando tarea:', tarea);
    return this.http.post<Tarea>(this.apiUrl, tarea);
  }
}