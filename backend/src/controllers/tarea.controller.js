//Datos de prueba y funcion listar tareas
const tareas = [
  {
    id: 1,
    titulo: 'Primera tarea',
    descripcion: 'Tarea de prueba',
    estado: 'pendiente'
  },
  {
    id: 2,
    titulo: 'Segunda tarea',
    descripcion: 'Otra tarea de prueba',
    estado: 'completada'
  }
];

//aca esta la funcion
const listarTareas = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(tareas));
};

//buscar por id

const buscarTareaPorId = (req, res) => {

  const id = Number(req.params.id);
  const tareaEncontrada = tareas.find((tarea) => tarea.id === id);

  if (!tareaEncontrada) {

    res.status(404);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ mensaje: 'Tarea no encontrada' }));
    return;

  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(tareaEncontrada));

};

module.exports = {
  
  listarTareas,
  buscarTareaPorId

};