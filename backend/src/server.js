//CORS permite que el frontend pueda enviar peticiones HTTP al backend. (diferentes puertos )
const cors= require ('cors');
const express = require('express'); 
const routerTareas = require('./routes/tareas.routes');
const app = express();
const PORT = 3000;
const hostname = '127.0.0.1';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

// /tareas mantiene compatibilidad con el frontend actual.
app.use('/tareas', routerTareas);

// /api mantiene compatibilidad con la estructura de rutas propuesta por Juana.
app.use('/api', routerTareas);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://${hostname}:${PORT}`);
});
