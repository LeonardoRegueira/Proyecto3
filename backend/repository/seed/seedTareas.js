require('dotenv').config();

const dns = require('dns');
const mongoose = require('mongoose');

const Tarea = require('../models/tarea.model');

dns.setServers(['8.8.8.8', '1.1.1.1']);


const tareas = [

  { id: 1, titulo: 'Primera tarea', descripcion: 'Tarea de prueba', estado: 'pendiente' },

  { id: 2, titulo: 'Segunda tarea', descripcion: 'Otra tarea de prueba', estado: 'completada' },
  { id: 3, titulo: 'tercera tarea', descripcion: 'Otra tarea de prueba', estado: 'completada' },
  { id: 4, titulo: 'cuarta tarea', descripcion: 'Otra tarea de prueba', estado: 'completada' },
  { id: 5, titulo: 'quinta tarea', descripcion: 'Otra tarea de prueba', estado: 'completada' }


];


const seed = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error('Falta configurar MONGODB_URI en el archivo .env');
  }

  await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10000
  });

  await Tarea.deleteMany();

  await Tarea.insertMany(tareas);

  console.log('Tareas iniciales creadas');

  await mongoose.disconnect();

};


seed().catch((error) => {
  console.error('Error al cargar tareas iniciales:', error.message);

  if (error.name === 'MongooseServerSelectionError') {
    console.error(
      'Revisa que tu IP actual este habilitada en MongoDB Atlas > Network Access.'
    );
  }

  if (error.message.includes('querySrv')) {
    console.error(
      'Tambien puede ser un problema de resolucion DNS del registro SRV de Atlas.'
    );
  }

  process.exit(1);
});
