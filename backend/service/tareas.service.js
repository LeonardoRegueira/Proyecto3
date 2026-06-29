const tareasRepository = require('../repository/tareas.repository');

// Solicita todas las tareas
const listarTareas = async () => {
  return await tareasRepository.todasLasTareas();
};

// Solicita tarea según su id
const buscarTareaPorId = async (idBuscado) => {
  return await tareasRepository.tareasFiltradasSegunId(idBuscado);
};

// Solicita las tareas que coincidan con un estado
const listarTareasPorEstado = async (estadoBuscado) => {
  return await tareasRepository.tareasFiltradasSegunEstado(estadoBuscado);
};

const crearTarea = async (nuevaTarea) => {
  return await tareasRepository.crearTarea(nuevaTarea);
};

const actualizarTarea = async (tareaModificada) => {
  return await tareasRepository.actualizarTarea(tareaModificada);
};
                                                                                                                                                                              
module.exports = {
  listarTareas,
  buscarTareaPorId,
  listarTareasPorEstado,
  crearTarea,
  actualizarTarea
};
