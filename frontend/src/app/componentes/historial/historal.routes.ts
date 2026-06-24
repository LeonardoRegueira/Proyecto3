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
        loadComponent: () => import("./todos/todos").then(modulo => modulo.Todos)
    },
    {
        path: "pendientes",
        loadComponent: () => import("./pendientes/pendientes").then(modulo => modulo.Pendientes)
    },
    {
        path: "progreso",
        loadComponent: () => import("./progreso/progreso").then(modulo => modulo.Progreso)
    },
    {
        path: "completos",
        loadComponent: () => import("./completos/completos").then(modulo => modulo.Completos)
    },
    {
        path: "detalle/:id",
        loadComponent:()=> import("./detalle/detalle").then(modulo=>modulo.Detalle)
    },
    {
        path: "modificar/:id",
        loadComponent:()=> import("../modificar/modificar").then(modulo=>modulo.Modificar)
    }

]}
]