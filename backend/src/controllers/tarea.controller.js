//Datos de prueba: array de tareas
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

// Devuelve todas las tareas
const listarTareas = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(tareas));
};

//Busca tareas por ID

const buscarTareaPorId = (req, res) => {
  const id = req.params.id;

  //Busca tareas en el arreglo
  const tareaEncontrada = tareas.find((tarea) => tarea.id === id);

//Si la tarea no es encontrada da error
  if (!tareaEncontrada) {

    res.status(404);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ mensaje: 'Tarea no encontrada' }));
    return;

  }
// Devuelve la tarea encontrada
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(tareaEncontrada));

};

//exportamos las funciones 
module.exports = {
  
  listarTareas,
  buscarTareaPorId

};