require('dotenv').config();

const cors = require('cors');
const express = require('express');
const routerTareas = require('./routes/tareas.routes');
const conectarDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;
const hostname = '127.0.0.1';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

app.use('/tareas', routerTareas);
app.use('/api', routerTareas);

const iniciarServidor = async () => {
  await conectarDB();

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://${hostname}:${PORT}`);
  });
};

iniciarServidor();
