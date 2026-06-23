// Import MongoDB
const Tarea = require('../models/tarea.model');

// Busca y devuelve todas las tareas guardadas en MongoDB
const todasLasTareas = async () => {
  return await Tarea.find();
};

// Busca una tarea por su campo id numérico
const tareasFiltradasSegunId = async (idBuscado) => {
  return await Tarea.findOne({ id: idBuscado });
};

// Busca todas las tareas que tengan el estado indicado
const tareasFiltradasSegunEstado = async (estadoBuscado) => {
  return await Tarea.find({ estado: estadoBuscado });
};

module.exports = {
  todasLasTareas,
  tareasFiltradasSegunId,
  tareasFiltradasSegunEstado
};