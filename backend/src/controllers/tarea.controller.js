const tareasService = require("../service/tareas.service");

exports.todasLasTareasController = async (req, res) => {
  try {
    const listaTotal = await tareasService.todasTareasService();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(listaTotal));
  }
  catch (error) {
    console.log("Error en buscar las todas tareas - Capa Controller", error)
  }
};
exports.tareasFiltradasEstadoController = async (req, res) => {
  try {
    const estadoBuscado = req.params.estado;
    const listaFiltrada = await tareasService.tareasFiltradasPorEstadoService(estadoBuscado);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(listaFiltrada));
  }
  catch (error) {
    console.log("Error en buscar las tareas segun su estado obtenido - Capa Controller", error)
  }
}

exports.buscarTareaPorId = async(req, res) => {

  try {
    const idBuscado = Number(req.params.id);
    const tareaEncontrada = await tareasService.tareasFiltradasPorIdService(idBuscado);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(tareaEncontrada));
  }
  catch (error) {
    console.log("Error en buscar las tareas segun id - Capa Controller", error)
  }
};