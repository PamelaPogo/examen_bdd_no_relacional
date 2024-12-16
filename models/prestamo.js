const mongoose = require('mongoose');

const PrestamoSchema = new mongoose.Schema({
  codSocio: { type: String, default: null },
  idVolumenes: { type: String, required: true },
  fechaPrestamo: { type: Date, required: true },
  fechaTopeDevolucion: { type: Date, required: true },
  fechaRealDevolucion: { type: Date, default: null },
  estado: { type: Number, default: 1 } // 1 = Activo, 0 = Inactivo
});

module.exports = mongoose.model('Prestamo', PrestamoSchema);
