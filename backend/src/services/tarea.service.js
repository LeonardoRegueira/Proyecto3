const tareaRepository = require('../repository/tarea.repository');

const listarTareas = () => {
  return tareaRepository.obtenerTodasLasTareas();
};

const buscarTareaPorId = (id) => {
  return tareaRepository.obtenerTareaPorId(id);
};

module.exports = {
  listarTareas,
  buscarTareaPorId
};
