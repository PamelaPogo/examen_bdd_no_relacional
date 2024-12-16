const express = require("express");
const router = express.Router();
const personaController = require("../controllers/personaController");

// Rutas para CRUD de personas
router.post("/", personaController.createPersona);
router.get("/", personaController.getPersonas);
router.put("/:id", personaController.updatePersona);
router.delete("/:id", personaController.deletePersona);

module.exports = router;
