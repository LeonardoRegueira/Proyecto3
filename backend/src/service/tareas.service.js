const tareasRepository = require("../repository/tareas.repository");

exports.todasTareasService =async()=>{
    try{
        let listaTodasService= await tareasRepository.todasLasTareas();
        return listaTodasService;
    }
    catch(error){
        console.log("Error en buscar las todas tareas - Capa Service" ,error)
    }
}
exports.tareasFiltradasPorEstadoService =async(estadoBuscado)=>{
    try{
        let listaFiltradaEstado= await tareasRepository.tareasFiltradasSegunEstado(estadoBuscado);
        return listaFiltradaEstado;
    }
    catch(error){
        console.log("Error en buscar las todas segun su estado - Capa Service" ,error)
    }
}
exports.tareasFiltradasPorIdService = async (idBuscado)=>{
    try{
        let listaFiltradaId = await tareasRepository.tareasFiltradasSegunId(idBuscado);
        return listaFiltradaId;
    }
    catch(error){
        console.log("Error en buscar tarea por id - Capa Service" ,error)
    }
}