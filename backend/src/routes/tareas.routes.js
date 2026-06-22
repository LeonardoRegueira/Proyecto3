//rutas relacionadas con las tareas

const express = require('express');
const tareasController =  require("../controllers/tarea.controller");

const routerTareas = express.Router();

routerTareas.get("/tareas/todas", tareasController.readTodasLasTareasController);
routerTareas.get("/tareas/id/:id", tareasController.readBuscarTareaPorIdController);
routerTareas.get("/tareas/estado/:estado", tareasController.readTareasFiltradasEstadoController);

routerTareas.post("/ingresar-tarea", tareasController.createNuevaTareaController);

routerTareas.delete("/eliminar/:id", tareasController.deleteTareaController);

routerTareas.put("/actualizar", tareasController.updateTareasController);

module.exports = routerTareas;
