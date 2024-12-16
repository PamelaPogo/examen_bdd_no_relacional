const express = require('express');
const router = express.Router();
const volumenController = require('../controllers/volumenController');

// Crear un nuevo volumen
router.post('/', volumenController.createVolumen);

// Obtener todos los volúmenes activos
router.get('/', volumenController.getAllVolumenes);

// Obtener un volumen por ID
router.get('/:id', volumenController.getVolumenById);

// Actualizar un volumen
router.put('/:id', volumenController.updateVolumen);

// Eliminar lógicamente un volumen
router.delete('/:id', volumenController.deleteVolumen);

module.exports = router;
