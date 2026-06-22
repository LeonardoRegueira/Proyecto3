const tareas = require("../src/baseDeDatos");
exports.readTodasLasTareasRepository = async () => {
    try {
        if (tareas.length === 0) {
            return "No hay ninguna tarea"
        }
        return tareas;
    }
    catch (error) {
        console.log("Error en devolver todas las tareas - Capa Repository", error)
    }
}

exports.readTareasFiltradasSegunEstadoRepository = async (estadoBuscado) => {
    try {
        if (estadoBuscado === "pendiente") {
            const listaPendientes = tareas.filter(
                element => element.estado === "pendiente"
            );
            if (listaPendientes.length === 0) {
                return "No hay tareas pendientes"
            }
            return listaPendientes;
        }
        if (estadoBuscado === "en progreso") {
            const listaEnProgreso = tareas.filter(
                element => element.estado === "en progreso"
            );
            if (listaEnProgreso.length === 0) {
                return "No hay tareas en progreso"
            }
            return listaEnProgreso;
        }
        else if (estadoBuscado === "completada") {
            const listaCompletadas = tareas.filter(
                element => element.estado === "completada"
            );
            if (listaCompletadas.length === 0) {
                return "No hay tareas completadas"
            }
            return listaCompletadas;
        }
    }
    catch (error) {
        console.log("Error en devolver tareas - Capa Repository", error)
    }
}
exports.readBuscarTareaFiltradaSegunIdRepository = async (idBuscado) => {

    try {
        const tareaBuscadaId = tareas.find(
            element => element.id === idBuscado);
        if (!tareaBuscadaId) {
            return "No hay ninguna tarea con ese id: " + idBuscado
        }
        return tareaBuscadaId;
    }
    catch (error) {
        console.log("Error en devolver tarea buscada por id - Capa Repository", error)
    }
}
exports.createNuevaTareaRepository = async (nueva_tarea) => {
    try {
        console.log("Hola desde crear - Capa Repository")
        tareas.push(nueva_tarea);
        return tareas;
    }
    catch (error) {
        console.log("Error en crear nueva tarea - Capa Repository", error)
    }
}
exports.deleteTareaRepository = async (idPorEleminar) => {
    try {
        const ubicacion = tareas.findIndex(
            element => element.id === idPorEleminar);
        if (ubicacion >= 0) {
            tareas.splice(ubicacion, 1)
            return tareas;
        } else {
            return []
        }
    }
    catch (error) {
        console.log("Error en eliminar tarea - Capa Repository", error)
    }
}
//actulizar
exports.updateTareaRepository = async (tareaModificada) => {
    try {
        let indice = tareas.findIndex(
            element => element.id === tareaModificada.id);
        if (indice >= 0) {
            tareas[indice] = tareaModificada;
            return tareas
        }
        else {
            return []
        }
    }
    catch (error) {
        console.log("Error en actualizar tarea - Capa Repository", error)
    }
}