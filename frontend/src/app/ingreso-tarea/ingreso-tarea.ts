import { Component } from '@angular/core';
import{ServicioConexion} from "../service/servicio-conexion"

@Component({
  selector: 'app-ingreso-tarea',
  imports: [],
  templateUrl: './ingreso-tarea.html',
  styleUrl: './ingreso-tarea.css',
})
export class IngresoTarea {
  constructor(private servicioConexion: ServicioConexion){}
  id = 0;
      titulo = "";
      descripcion = "";
      nivel_prioridad = "";
      estado = "";
      listaId: number[]=[];
      public crearId(){
        this.id= this.listaId.length +1; 
        this.listaId.push(this.id);
      }
  public guardar(){
    this.crearId();
    const nueva_tarea={
      id: this.id,
      titulo: this.titulo,
      descripcion: this.descripcion,
      nivel_prioridad: this.nivel_prioridad,
      estado: this.estado
    }
    this.servicioConexion.ingresarTarea(nueva_tarea).subscribe();
  }

}
