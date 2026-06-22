import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private apiUrl = 'http://localhost:3000/tareas';

  constructor(private http: HttpClient) {}

  listarTareas() {
    return this.http.get(this.apiUrl);
  }

  buscarTareaPorId(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}