//rutas relacionadas con las tareas

const express = require('express');
const tareasController =  require("../controllers/tarea.controller");

const routerTareas = express.Router();

routerTareas.get("/tareas/todas", tareasController.todasLasTareasController);
routerTareas.get("/tareas/id/:id", tareasController.buscarTareaPorId);
routerTareas.get("/tareas/esatdo/:estado", tareasController.tareasFiltradasEstadoController);

module.exports = router;
