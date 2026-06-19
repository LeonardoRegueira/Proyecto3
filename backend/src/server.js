const express = require('express');

const app = express();

const routerTareas= require("./routes/tareas.routes");

const PORT = 3000;
const hostname="127.0.0.1";
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend funcionando');
});

app.use("/api", routerTareas)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto http://${hostname}:${PORT}`);
});

