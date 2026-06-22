const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PUERTO = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/proyecto3_db')
  .then(() => console.log('¡MongoDB conectado!'))
  .catch(err => console.error('Error al conexion:', err));

// 1. EL MODELO (El molde de la tarea)
const Tarea = mongoose.model('Tarea', new mongoose.Schema({
  titulo: String,
  descripcion: String,
  prioridad: String
}));

app.get('/api/tareas', async (req, res) => {
  try {
    const listaTareas = await Tarea.find(); 
    res.status(200).json(listaTareas);
  } catch (error) {
    res.status(500).json({ error: 'Error al recibir la tarea' });
  }
});

app.post('/api/tareas', async (req, res) => {
  try {
    const nuevaTarea = new Tarea(req.body);
    await nuevaTarea.save();
    res.status(201).json({ mensaje: 'Tarea guardada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar' });
  }
});

app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});
