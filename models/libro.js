const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  editorial: { type: String },
  anoEscritura: { type: Number },
  autores: [
    {
      idAutor: { type: String },
      nombre: { type: String }
    }
  ],
  estado: { type: Number, default: 1 } // 1 = Activo, 0 = Inactivo
});

module.exports = mongoose.model('Libro', LibroSchema);
