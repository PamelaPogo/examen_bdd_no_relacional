const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

// Crear un nuevo libro
router.post('/', libroController.createLibro);

// Obtener todos los libros activos
router.get('/', libroController.getAllLibros);

// Obtener un libro por ID
router.get('/:id', libroController.getLibroById);

// Actualizar un libro
router.put('/:id', libroController.updateLibro);

// Eliminar lógicamente un libro
router.delete('/:id', libroController.deleteLibro);

module.exports = router;
