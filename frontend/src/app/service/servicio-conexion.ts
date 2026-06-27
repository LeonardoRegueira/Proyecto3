import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IngresoTarea } from '../ingreso-tarea/ingreso-tarea';
import { Todos } from '../componentes/historial/todos/todos';
import { Pendientes } from '../componentes/historial/pendientes/pendientes';
import { Progreso } from '../componentes/historial/progreso/progreso';
import { Completos } from '../componentes/historial/completos/completos';
import { Modificar } from '../componentes/modificar/modificar';

@Injectable({
  providedIn: 'root',
})

export class ServicioConexion {
  private url = "http://127.0.0.1:3000/api";

  constructor(private httpClient: HttpClient) { }
  public ingresarTarea(nueva_tarea: object): Observable<IngresoTarea> {
    return this.httpClient.post<IngresoTarea>(`${this.url}/ingresar-tarea`,nueva_tarea)
  }
  public modificarTarea(tarea_modificada: object): Observable<Modificar> {
    return this.httpClient.put<Modificar>(`${this.url}/actualizar`,tarea_modificada)
  }
  public eliminarTarea(id_tarea_por_eliminar: Number): Observable<Todos> {
    return this.httpClient.delete<Todos>(`${this.url}/eliminar/${id_tarea_por_eliminar}`);
  }
  public leerTodasLasTareas(): Observable<Todos> {
    return this.httpClient.get<Todos>(`${this.url}/tareas/todas`);
  }
  public leerLasTareasPendientes(): Observable<Pendientes> {
    return this.httpClient.get<Pendientes>(`${this.url}/tareas/estado/pendiente`);
  }
  public leerLasTareasEnProgreso(): Observable<Progreso> {
    return this.httpClient.get<Progreso>(`${this.url}/tareas/estado/en%20progreso`);
  }
  public leerLasTareasCompletos(): Observable<Completos> {
    return this.httpClient.get<Completos>(`${this.url}/tareas/estado/completada`);
  }
  public leerLasTareasSegunId(id_buscado: Number): Observable<Todos> {
    return this.httpClient.get<Todos>(`${this.url}/tareas/id/${id_buscado}`);
  }
}
