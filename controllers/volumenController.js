const Volumen = require('../models/volumen');

// Crear un nuevo volumen
exports.createVolumen = async (req, res) => {
  try {
    const volumen = new Volumen(req.body);
    const savedVolumen = await volumen.save();
    res.status(201).json(savedVolumen);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener todos los volúmenes activos
exports.getAllVolumenes = async (req, res) => {
  try {
    const volumenes = await Volumen.find({ estado: 1 });
    res.json(volumenes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un volumen por ID
exports.getVolumenById = async (req, res) => {
  try {
    const volumen = await Volumen.findById(req.params.id);
    if (!volumen || volumen.estado === 0) {
      return res.status(404).json({ message: 'Volumen no encontrado o inactivo' });
    }
    res.json(volumen);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Actualizar un volumen
exports.updateVolumen = async (req, res) => {
  try {
    const updatedVolumen = await Volumen.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedVolumen);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar lógicamente un volumen
exports.deleteVolumen = async (req, res) => {
  try {
    await Volumen.findByIdAndUpdate(req.params.id, { estado: 0 });
    res.json({ message: 'Volumen eliminado lógicamente' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
