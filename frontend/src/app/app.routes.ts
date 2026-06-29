import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "", 
        redirectTo: "home",
        pathMatch: "full"
    },

    {
        path: "ingreso-tarea",
        loadComponent: () => import("./componentes/ingreso-tarea/ingreso-tarea").then(modulo => modulo.IngresoTarea),
        title: "Nueva tarea"
    },
    {
        path: "historial",
        loadChildren: () => import("./componentes/historial/historal.routes").then(m => m.historialRoutes),
        title: "Historial de tareas"
    }

];
