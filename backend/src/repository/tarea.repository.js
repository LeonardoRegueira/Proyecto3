const tareas = require('../baseDeDatos');

const obtenerTodasLasTareas = () => {
  return tareas;
};

const obtenerTareaPorId = (id) => {
  return tareas.find((tarea) => tarea.id === id);
};

module.exports = {
  obtenerTodasLasTareas,
  obtenerTareaPorId
};
