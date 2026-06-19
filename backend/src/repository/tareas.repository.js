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

//exports.tareasPendientes = async () => {
//    try {
//        const listaPendientes = tareas.filter(
//            element => element.estado === "pendiente"
//        );
//        if (listaPendientes === 0) {
//            return []
//        }
//        else {
//            return listaPendientes
//        }
//    }
//    catch (error) {
//        console.log("Error en devolver tareas pendientes - Capa Repository", error)
//    }
//}
//exports.tareasEnProgreso = async () => {
//    try {
//        const listaEnProgreso = tareas.filter(
//            element => element.estado === "en progreso"
//        );
//        if (listaEnProgreso === 0) {
//            return []
//        }
//        else {
//            return listaEnProgreso
//        }
//    }
//    catch (error) {
//        console.log("Error en devolver tareas en progreso - Capa Repository", error)
//    }
//}
//exports.tareasCompletas = async () => {
//    try {
//        const listaCompletadas = tareas.filter(
//            element => element.estado === "completada"
//        );
//        if (listaCompletadas === 0) {
//            return []
//        }
//        else {
//            return listaCompletadas
//        }
//    }
//    catch (error) {
//        console.log("Error en devolver tareas completadas - Capa Repository", error)
//    }
//}