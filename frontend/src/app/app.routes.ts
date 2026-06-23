import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "", 
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        loadComponent: () => import("./componentes/home/home").then(modulo => modulo.Home)
    },
    {
        path: "ingreso-tarea",
        loadComponent: () => import("./ingreso-tarea/ingreso-tarea").then(modulo => modulo.AppIngresoTareaComponent)
    },
    {
        path: "historial",
        loadChildren: () => import("./componentes/historial/historal.routes").then(m => m.historialRoutes)
    },
    {
        path: "cancelado",
        loadComponent: () => import("./componentes/cancelado/cancelado").then(modulo => modulo.Cancelado)
    }
];
