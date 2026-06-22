const tareasService = require('../service/tareas.service');

const listarTareas = (req, res) => {
  const tareas = tareasService.todasTareasService();

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(tareas));
};

const buscarTareaPorId = (req, res) => {
  const id = Number(req.params.id);
  const tareaEncontrada = tareasService.tareasFiltradasPorIdService(id);

  if (!tareaEncontrada) {
    res.status(404);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ mensaje: 'Tarea no encontrada' }));
    return;
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(tareaEncontrada));
};

const tareasFiltradasEstadoController = (req, res) => {
  const estadoBuscado = req.params.estado;
  const tareasFiltradas = tareasService.tareasFiltradasPorEstadoService(estadoBuscado);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(tareasFiltradas));
};

module.exports = {
  listarTareas,
  todasLasTareasController: listarTareas,
  buscarTareaPorId,
  tareasFiltradasEstadoController
};
