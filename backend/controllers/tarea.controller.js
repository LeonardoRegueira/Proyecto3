const tareasService = require("../service/tareas.service");

exports.readTodasLasTareasController = async (req, res) => {
  try {
    const listaTotal = await tareasService.readTodasTareasService();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(listaTotal));
  }
  catch (error) {
    console.log("Error en buscar todas tareas - Capa Controller", error)
  }
};
exports.readTareasFiltradasEstadoController = async (req, res) => {
  try {
    const estadoBuscado = req.params.estado;
    const listaFiltrada = await tareasService.readTtareasFiltradasPorEstadoService(estadoBuscado);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(listaFiltrada));
  }
  catch (error) {
    console.log("Error en buscar las tareas segun su estado obtenido - Capa Controller", error)
  }
}

exports.readBuscarTareaPorIdController = async(req, res) => {

  try {
    const idBuscado = Number(req.params.id);
    const tareaEncontrada = await tareasService.readBuscarTareaFiltradaPorIdService(idBuscado);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(tareaEncontrada));
  }
  catch (error) {
    console.log("Error en buscar las tareas segun id - Capa Controller", error)
  }
};
exports.createNuevaTareaController = async (req, res)=>{
  try{
    let nueva_tarea = req.body;
    let ingreso_de_tarea = await tareasService.createNuevaTareaService(nueva_tarea);
    res.send(JSON.stringify(ingreso_de_tarea));
  }
  catch (error) {
    console.log("Error en crear nueva tarea - Capa Controller", error)
  }
}
exports.deleteTareaController = async (req, res)=>{
  try{
    let idPorEliminar= Number(req.params.id);
    let nuevaLista = await tareasService.deleteTareaService(idPorEliminar);
    res.status(200).send(JSON.stringify(nuevaLista));
  }
  catch (error) {
    console.log("Error eliminar tarea - Capa Controller", error)
  }
}
exports.updateTareasController = async (req, res) =>{
  try{
    const tareaModificada = req.body;
    const listaActualizada = await tareasService.updateTareaService(tareaModificada);
    res.status(200).send(JSON.stringify(listaActualizada));
  }
  catch (error) {
    console.log("Error actualizar tarea - Capa Controller", error)
  }
}