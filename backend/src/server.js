const express = require('express');
const tareaRoutes=require('./routes/tareas.routes');
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

app.use('/tareas', tareaRoutes);

// app.get('/tareas', (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify(tareas));
// });

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

