const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

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

app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

app.get('/tareas', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(tareas));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

