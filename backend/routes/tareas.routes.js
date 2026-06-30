// Rutas relacionadas con las tareas.

const express = require('express');
const tareasController = require('../controllers/tarea.controller');

const routerTareas = express.Router();

routerTareas.get('/', tareasController.listarTareas);
routerTareas.get('/estado/:estado', tareasController.tareasFiltradasEstado);
routerTareas.get('/:id', tareasController.buscarTareaPorId);
routerTareas.post('/', tareasController.crearTarea);
routerTareas.put('/:id', tareasController.actualizarTarea);
routerTareas.delete('/:id', tareasController.eliminarTarea);

module.exports = routerTareas;
