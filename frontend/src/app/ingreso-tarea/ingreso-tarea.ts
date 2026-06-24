import { Component } from '@angular/core';
import{ServicioConexion} from "../service/servicio-conexion"
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingreso-tarea',
  imports: [FormsModule],
  templateUrl: './ingreso-tarea.html',
  styleUrl: './ingreso-tarea.css',
})
export class IngresoTarea {
  constructor(private servicioConexion: ServicioConexion){}
  id = 0;
      titulo = "";
      descripcion = "";
      nivel_prioridad = "Baja";
      estado = "";
      listaId: number[]=[];
      public crearId(){
        this.id= this.listaId.length +1; 
        this.listaId.push(this.id);
      }
  public guardar(){
    if (!this.titulo.trim() || !this.descripcion.trim()) {
      alert('Completa el título y la descripción si o si');
      return;
    }
    this.crearId();
    const nueva_tarea={
      id: this.id,
      titulo: this.titulo,
      descripcion: this.descripcion,
      nivel_prioridad: this.nivel_prioridad,
      estado: "pendiente"
    }
    this.servicioConexion.ingresarTarea(nueva_tarea).subscribe();
  }

}
