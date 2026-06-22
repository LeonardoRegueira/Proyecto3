import { Routes } from "@angular/router";


export const historialRoutes: Routes = [
    {
        path: "",
        loadComponent: ()=>import("./historial").then(modulo=>modulo.Historial),
        children:[
            {
                path:"",
                redirectTo:"todos",
                pathMatch:"full"
            },
    {
        path: "todos",
        loadComponent: () => import("../historial/todos/todos").then(modulo => modulo.Todos)
    },
    {
        path: "pendientes",
        loadComponent: () => import("../historial/pendientes/pendientes").then(modulo => modulo.Pendientes)
    },
    {
        path: "progreso",
        loadComponent: () => import("../historial/progreso/progreso").then(modulo => modulo.Progreso)
    },
    {
        path: "completos",
        loadComponent: () => import("../historial/completos/completos").then(modulo => modulo.Completos)
    }]}
]