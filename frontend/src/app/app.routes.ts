import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';

export const routes: Routes = [
    {
        path: "", 
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        loadComponent: () => import("./componentes/home/home").then(modulo => modulo.Home),
        title: "Panel principal"
    },
    {
        path: "ingreso-tarea",
        loadComponent: () => import("../app/ingreso-tarea/ingreso-tarea").then(modulo => modulo.IngresoTarea),
        title: "Nueva tarea"
    },
    {
        path: "historial",
        loadChildren: () => import("./componentes/historial/historal.routes").then(m => m.historialRoutes),
        title: "Historial de tareas"
    }

];
