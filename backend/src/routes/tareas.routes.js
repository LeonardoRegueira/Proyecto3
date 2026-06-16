//rutas relacionadas con las tareas

const express = require('express');

const router = express.Router();

const { listarTareas, buscarTareaPorId } = require('../controllers/tarea.controller');

router.get('/', listarTareas);

router.get('/:id', buscarTareaPorId);

module.exports = router;
