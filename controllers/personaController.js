const Persona = require("../models/persona");

// Crear una persona
exports.createPersona = async (req, res) => {
  try {
    const persona = new Persona(req.body);
    await persona.save();
    res.status(201).json(persona);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las personas activas
exports.getPersonas = async (req, res) => {
  try {
    const personas = await Persona.find({ estado: 1 });
    res.json(personas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una persona por ID
exports.updatePersona = async (req, res) => {
  try {
    const persona = await Persona.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!persona) return res.status(404).json({ error: "Persona no encontrada" });
    res.json(persona);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar (lógicamente) una persona por ID
exports.deletePersona = async (req, res) => {
  try {
    const persona = await Persona.findByIdAndUpdate(
      req.params.id,
      { estado: 0 },
      { new: true }
    );
    if (!persona) return res.status(404).json({ error: "Persona no encontrada" });
    res.json({ message: "Persona eliminada lógicamente", persona });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
