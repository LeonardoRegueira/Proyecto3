const tareasService = require('../service/tareas.service');

const listarTareas = async (req, res) => {
  try {
    const tareas = await tareasService.listarTareas();
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(tareas));

  } catch (error) {
    res.status(500);
    res.send(JSON.stringify({ mensaje: 'Error al listar tareas' }));
  }
};

const buscarTareaPorId = async (req, res) => {
  try {
    const id = req.params.id;
    const tareaEncontrada = await tareasService.buscarTareaPorId(id);

    if (!tareaEncontrada) {
      res.status(404);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ mensaje: 'Tarea no encontrada' }));

      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(tareaEncontrada));

  } catch (error) {
    res.status(500);
    res.send(JSON.stringify({ mensaje: 'Error al buscar tarea' }));
  }
};

const tareasFiltradasEstado = async (req, res) => {
  try {
    const estadoBuscado = req.params.estado;

    const tareasFiltradas =
      await tareasService.listarTareasPorEstado(estadoBuscado);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(tareasFiltradas));

  } catch (error) {
    res.status(500);
    res.send(
      JSON.stringify({
        mensaje: 'Error al buscar tareas por estado'
      })
    );
  }
};

module.exports = {
  listarTareas,
  buscarTareaPorId,
  tareasFiltradasEstado
};