const Libro = require('../models/libro');

// Crear un nuevo libro
exports.createLibro = async (req, res) => {
  try {
    const libro = new Libro(req.body);
    const savedLibro = await libro.save();
    res.status(201).json(savedLibro);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener todos los libros activos
exports.getAllLibros = async (req, res) => {
  try {
    const libros = await Libro.find({ estado: 1 });
    res.json(libros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un libro por ID
exports.getLibroById = async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    if (!libro || libro.estado === 0) {
      return res.status(404).json({ message: 'Libro no encontrado o inactivo' });
    }
    res.json(libro);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Actualizar un libro
exports.updateLibro = async (req, res) => {
  try {
    const updatedLibro = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLibro);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar lógicamente un libro
exports.deleteLibro = async (req, res) => {
  try {
    await Libro.findByIdAndUpdate(req.params.id, { estado: 0 });
    res.json({ message: 'Libro eliminado lógicamente' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
