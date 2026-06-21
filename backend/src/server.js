//CORS permite que el frontend pueda enviar peticiones HTTP al backend. (diferentes puertos )
const cors= require ('cors');
const express = require('express'); 
const tareaRoutes=require('./routes/tareas.routes');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/tareas', tareaRoutes);

app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});