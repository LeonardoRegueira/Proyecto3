const mongoose = require('mongoose');


const tareaSchema = new mongoose.Schema({

  id: {

    type: Number,

    required: true,

    unique: true

  },

  titulo: {

    type: String,

    required: true,

    trim: true

  },

  descripcion: {

    type: String,

    default: ''

  },

  nivel_prioridad: {

    type: String,

    enum: ['Baja', 'Media', 'Alta'],

    default: 'Baja'

  },

  estado: {

    type: String,

    enum: ['pendiente', 'en progreso', 'completada', 'cancelada'],

    default: 'pendiente'

  }

}, {

  timestamps: true

});


module.exports = mongoose.model('Tarea', tareaSchema);
