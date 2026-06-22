const tareas = require('../src/baseDeDatos');

const todasLasTareas = () => {
  if (tareas.length === 0) {
    return 'No hay ninguna tarea';
  }

  return tareas;
};

const tareasFiltradasSegunId = (idBuscado) => {
  const tareaBuscadaId = tareas.find((tarea) => tarea.id === idBuscado);

  if (!tareaBuscadaId) {
    return undefined;
  }

  return tareaBuscadaId;
};

const tareasFiltradasSegunEstado = (estadoBuscado) => {
  const tareasFiltradas = tareas.filter((tarea) => tarea.estado === estadoBuscado);

  if (tareasFiltradas.length === 0) {
    return [];
  }

  return tareasFiltradas;
};

module.exports = {
  todasLasTareas,
  tareasFiltradasSegunId,
  tareasFiltradasSegunEstado
};
