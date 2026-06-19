const tareas = require("../src/baseDeDatos");
exports.todasLasTareas = async () => {
    try {
        return await JSON.stringify(tareas);
    }
    catch { }
}

exports.tareasFiltradasSegunEstado = async (estadoBuscado) => {
    try {
        if (estadoBuscado === "pendiente") {
            const listaPendientes = tareas.filter(
                element => element.estado === "pendiente"
            );
            if (listaPendientes === []) {
                return []
            }
            return listaPendientes;
        }
        if (estadoBuscado === "en progreso") {
            const listaEnProgreso = tareas.filter(
                element => element.estado === "en progreso"
            );
            if (listaEnProgreso === []) {
                return []
            }
            return listaEnProgreso;
        }
        else if (estadoBuscado === "completada") {
            const listaCompletadas = tareas.filter(
                element => element.estado === "completada"
            );
            if (listaCompletadas === []) {
                return []
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
            res.status(404).send({
                code: 404,
                message:"Error, Tarea no encontrada"
            });
        }
        return tareaBuscadaId;
    }
    catch (error) {
        console.log("Error en devolver tarea buscada por id - Capa Repository", error)
    }
}