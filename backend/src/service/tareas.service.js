const tareasRepository = require('../repository/tareas.repository');

const todasTareasService = () => {
  return tareasRepository.todasLasTareas();
};

const tareasFiltradasPorIdService = (idBuscado) => {
  return tareasRepository.tareasFiltradasSegunId(idBuscado);
};

const tareasFiltradasPorEstadoService = (estadoBuscado) => {
  return tareasRepository.tareasFiltradasSegunEstado(estadoBuscado);
};

module.exports = {
  todasTareasService,
  tareasFiltradasPorIdService,
  tareasFiltradasPorEstadoService
};
