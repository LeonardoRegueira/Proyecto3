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

const crearTarea = async (req, res) => {
  try {
    const nuevaTarea = await tareasService.crearTarea(req.body);

    res.status(201);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(nuevaTarea));

  } catch (error) {
    res.status(400);
    res.setHeader('Content-Type', 'application/json');
    res.send(
      JSON.stringify({
        mensaje: 'Error al crear tarea',
        detalle: error.message
      })
    );
  }
};

const actualizarTarea = async (req, res) => {
  try {
    const tareaParaActualizar = {
      ...req.body,
      id: req.params.id || req.body.id
    };

    const tareaActualizada = await tareasService.actualizarTarea(tareaParaActualizar);

    if (!tareaActualizada) {
      res.status(404);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ mensaje: 'Tarea no encontrada' }));

      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(tareaActualizada));

  } catch (error) {
    res.status(400);
    res.setHeader('Content-Type', 'application/json');
    res.send(
      JSON.stringify({
        mensaje: 'Error al actualizar tarea',
        detalle: error.message
      })
    );
  }
};

const eliminarTarea = async (req, res) => {
  try {
    const tareaEliminada = await tareasService.eliminarTarea(req.params.id);

    if (!tareaEliminada) {
      res.status(404);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ mensaje: 'Tarea no encontrada' }));

      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ mensaje: 'Tarea eliminada correctamente' }));

  } catch (error) {
    res.status(500);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ mensaje: 'Error al eliminar tarea' }));
  }
};

module.exports = {
  listarTareas,
  buscarTareaPorId,
  tareasFiltradasEstado,
  crearTarea,
  actualizarTarea,
  eliminarTarea
};
