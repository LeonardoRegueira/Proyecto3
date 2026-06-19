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
exports.tareasFiltradas =async(estadoBuscado)=>{
    try{
        let listaFiltrada= await tareasRepository.tareasFiltradasSegunEstado(estadoBuscado);
        return listaTodasService;
    }
    catch(error){
        console.log("Error en buscar las todas segun su estado - Capa Service" ,error)
    }
}