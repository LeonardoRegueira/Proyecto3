const tareaService = require('../services/tarea.service');

const listarTareas = (req, res) => {
  const tareas = tareaService.listarTareas();

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(tareas));
};

const buscarTareaPorId = (req, res) => {
  const id = Number(req.params.id);
  const tareaEncontrada = tareaService.buscarTareaPorId(id);

  if (!tareaEncontrada) {
    res.status(404);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ mensaje: 'Tarea no encontrada' }));
    return;
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(tareaEncontrada));
};

module.exports = {
  listarTareas,
  buscarTareaPorId
};
