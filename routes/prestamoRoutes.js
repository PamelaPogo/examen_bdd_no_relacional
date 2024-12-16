const express = require('express');
const router = express.Router();
const prestamoController = require('../controllers/prestamoController');

// Crear un nuevo préstamo
router.post('/', prestamoController.createPrestamo);

// Obtener todos los préstamos activos
router.get('/', prestamoController.getAllPrestamos);

// Obtener un préstamo por ID
router.get('/:id', prestamoController.getPrestamoById);

// Actualizar un préstamo
router.put('/:id', prestamoController.updatePrestamo);

// Eliminar lógicamente un préstamo
router.delete('/:id', prestamoController.deletePrestamo);

module.exports = router;
