const tareas = require("../src/baseDeDatos");
exports.todasLasTareas = async () => {
    try {
        console.log("Hola desde Capa Repository- Lista Todos")
        if(tareas.length===0){
            return "No hay ninguna tarea"
        }
        return tareas;
    }
    catch (error) {
        console.log("Error en devolver todas las tareas - Capa Repository", error)
    }
}

exports.tareasFiltradasSegunEstado = async (estadoBuscado) => {
    try {
        if (estadoBuscado === "pendiente") {
            const listaPendientes = tareas.filter(
                element => element.estado === "pendiente"
            );
            if (listaPendientes.length===0) {
                return "No hay tareas pendientes"
            }
            return listaPendientes;
        }
        if (estadoBuscado === "en progreso") {
            const listaEnProgreso = tareas.filter(
                element => element.estado === "en progreso"
            );
            if (listaEnProgreso.length===0) {
                return "No hay tareas en progreso"
            }
            return listaEnProgreso;
        }
        else if (estadoBuscado === "completada") {
            const listaCompletadas = tareas.filter(
                element => element.estado === "completada"
            );
            if (listaCompletadas.length===0) {
                return "No hay tareas completadas"
            }
            return listaCompletadas;
        }
    }
    catch (error) {
        console.log("Error en devolver tareas - Capa Repository", error)
    }
}
exports.tareasFiltradasSegunId = async (idBuscado) => {

    try {
        const tareaBuscadaId = tareas.find(
            element => element.id === idBuscado);
        if(!tareaBuscadaId){
            return "No hay ninguna tarea con ese id: "+idBuscado
        }
        return tareaBuscadaId;
    }
    catch (error) {
        console.log("Error en devolver tarea buscada por id - Capa Repository", error)
    }
}