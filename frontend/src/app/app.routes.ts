import { Routes } from '@angular/router';
import { ListaTareas } from './lista-tareas/lista-tareas';
import { DetalleTarea } from './detalle-tarea/detalle-tarea';

export const routes: Routes = [
  { path: '', redirectTo: 'tareas', pathMatch: 'full' },
  { path: 'tareas', component: ListaTareas },
  { path: 'tareas/:id', component: DetalleTarea }
];