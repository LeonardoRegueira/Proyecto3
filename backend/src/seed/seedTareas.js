const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

require('dotenv').config();

const mongoose = require('mongoose');

const Tarea = require('../models/tarea.model');


const tareas = [

  { id: 1, titulo: 'Primera tarea', descripcion: 'Tarea de prueba', estado: 'pendiente' },

  { id: 2, titulo: 'Segunda tarea', descripcion: 'Otra tarea de prueba', estado: 'completada' },
  { id: 3, titulo: 'tercera tarea', descripcion: 'Otra tarea de prueba', estado: 'completada' },
  { id: 4, titulo: 'cuarta tarea', descripcion: 'Otra tarea de prueba', estado: 'completada' },
  { id: 5, titulo: 'quinta tarea', descripcion: 'Otra tarea de prueba', estado: 'completada' }


];


const seed = async () => {

  await mongoose.connect(process.env.MONGODB_URI);

  await Tarea.deleteMany();

  await Tarea.insertMany(tareas);

  console.log('Tareas iniciales creadas');

  await mongoose.disconnect();

};


seed();