const tareasRepository = require('../repository/tareas.repository');

const listarTareas = () => {
  return tareasRepository.todasLasTareas();
};

const buscarTareaPorId = (idBuscado) => {
  return tareasRepository.tareasFiltradasSegunId(idBuscado);
};

const listarTareasPorEstado = (estadoBuscado) => {
  return tareasRepository.tareasFiltradasSegunEstado(estadoBuscado);
};

module.exports = {
  listarTareas,
  buscarTareaPorId,
  listarTareasPorEstado,
  todasTareasService: listarTareas,
  tareasFiltradasPorIdService: buscarTareaPorId,
  tareasFiltradasPorEstadoService: listarTareasPorEstado
};
