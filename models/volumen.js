const mongoose = require('mongoose');

const VolumenSchema = new mongoose.Schema({
  isbn: { type: String, required: true },
  deteriorado: { type: Boolean, default: false },
  estado: { type: Number, default: 1 } // 1 = Activo, 0 = Inactivo
});

module.exports = mongoose.model('Volumen', VolumenSchema);
