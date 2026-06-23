require('dotenv').config();

//CORS permite que el frontend pueda enviar peticiones HTTP al backend. (diferentes puertos )
const cors= require ('cors');
const express = require('express'); 
const routerTareas = require('./routes/tareas.routes');

const conectarDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;
const hostname = '127.0.0.1';

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

const iniciarServidor = async () => {
  await conectarDB();

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://${hostname}:${PORT}`);
  });
};

iniciarServidor();
