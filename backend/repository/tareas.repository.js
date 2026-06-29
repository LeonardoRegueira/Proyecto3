// Import MongoDB
const Tarea = require('./models/tarea.model');

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

const prepararTarea = async (datosTarea) => {
  const tarea = { ...datosTarea };

  if (!tarea.id) {
    const ultimaTarea = await Tarea.findOne().sort({ id: -1 });
    tarea.id = ultimaTarea ? ultimaTarea.id + 1 : 1;
  }

  return tarea;
};

const crearTarea = async (nuevaTarea) => {
  const tareaPreparada = await prepararTarea(nuevaTarea);
  return await Tarea.create(tareaPreparada);
};

const actualizarTarea = async (tareaModificada) => {
  return await Tarea.findOneAndUpdate(
    { id: tareaModificada.id },
    tareaModificada,
    { new: true, runValidators: true }
  );
};

module.exports = {
  todasLasTareas,
  tareasFiltradasSegunId,
  tareasFiltradasSegunEstado,
  crearTarea,
  actualizarTarea,
};
