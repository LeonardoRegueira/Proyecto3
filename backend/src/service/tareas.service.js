const tareasRepository = require("../repository/tareas.repository");

exports.readTodasTareasService = async () => {
    try {
        let listaTodasService = await tareasRepository.readTodasLasTareasRepository();
        return listaTodasService;
    }
    catch (error) {
        console.log("Error en buscar todas las tareas - Capa Service", error)
    }
}
exports.readTareasFiltradasPorEstadoService = async (estadoBuscado) => {
    try {
        let listaFiltradaEstado = await tareasRepository.readTareasFiltradasSegunEstadoRepository(estadoBuscado);
        return listaFiltradaEstado;
    }
    catch (error) {
        console.log("Error en buscar tarea por estado - Capa Service", error)
    }
}
exports.readBuscarTareaFiltradaPorIdService = async (idBuscado) => {
    try {
        let listaFiltradaId = await tareasRepository.readBuscarTareaFiltradaSegunIdRepository(idBuscado);
        return listaFiltradaId;
    }
    catch (error) {
        console.log("Error en buscar tarea por id - Capa Service", error)
    }
}
exports.createNuevaTareaService = async (nueva_tarea) => {
    try {
        let tarea_ingresada = await tareasRepository.createNuevaTareaRepository(nueva_tarea);
        return tarea_ingresada;
    }
    catch (error) {
        console.log("Error en crear nueva tarea - Capa Service", error)
    }
}
exports.deleteTareaService = async (idPorEliminar) => {
    try {
        let nuevaLista = await tareasRepository.deleteTareaRepository(idPorEliminar);
        return nuevaLista;
    }
    catch (error) {
        console.log("Error en eliminar tarea - Capa Service", error)
    }
}
exports.updateTareaService = async (tareaModificada) => {
    try {
        let listaActualizada = await tareasRepository.updateTareaRepository(tareaModificada);
        return listaActualizada;
    }
    catch (error) {
        console.log("Error en actualizar tarea - Capa Service", error)
    }
}