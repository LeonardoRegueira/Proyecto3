//rutas relacionadas con las tareas

const express = require('express');
const tareasController = require('../controllers/tarea.controller');

const routerTareas = express.Router();

// Rutas compatibles con la estructura propuesta por Juana.
routerTareas.get('/tareas/todas', tareasController.todasLasTareasController);
routerTareas.get('/tareas/id/:id', tareasController.buscarTareaPorId);
routerTareas.get('/tareas/estado/:estado', tareasController.tareasFiltradasEstadoController);

// Rutas compatibles con el frontend actual.
routerTareas.get('/', tareasController.listarTareas);
routerTareas.get('/:id', tareasController.buscarTareaPorId);

module.exports = routerTareas;
