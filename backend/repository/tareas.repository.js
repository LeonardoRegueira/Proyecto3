 const Tarea = require("../models/tarea.model");

exports.readTodasLasTareasRepository = async () => {
    try {
        if (Tarea.length === 0) {
            return "No hay ninguna tarea"
        }
        return Tarea;
    }
    catch (error) {
        console.log("Error en devolver todas las tareas - Capa Repository", error)
    }
}

exports.readTareasFiltradasSegunEstadoRepository = async (estadoBuscado) => {
    try {
        if (estadoBuscado === "pendiente") {
            const listaPendientes = Tarea.filter(
                element => element.estado === "pendiente"
            );
            if (listaPendientes.length === 0) {
                return "No hay tareas pendientes"
            }
            return listaPendientes;
        }
        if (estadoBuscado === "en progreso") {
            const listaEnProgreso = Tarea.filter(
                element => element.estado === "en progreso"
            );
            if (listaEnProgreso.length === 0) {
                return "No hay tareas en progreso"
            }
            return listaEnProgreso;
        }
        else if (estadoBuscado === "completada") {
            const listaCompletadas = Tarea.filter(
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
        const tareaBuscadaId = Tarea.find(
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
        Tarea.push(nueva_tarea);
        return Tarea;
    }
    catch (error) {
        console.log("Error en crear nueva tarea - Capa Repository", error)
    }
}
exports.deleteTareaRepository = async (idPorEleminar) => {
    try {
        const ubicacion = Tarea.findIndex(
            element => element.id === idPorEleminar);
        if (ubicacion >= 0) {
            Tarea.splice(ubicacion, 1)
            return Tarea;
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
        let indice = Tarea.findIndex(
            element => element.id === tareaModificada.id);
        if (indice >= 0) {
            Tarea[indice] = tareaModificada;
            return Tarea
        }
        else {
            return []
        }
    }
    catch (error) {
        console.log("Error en actualizar tarea - Capa Repository", error)
    }
}