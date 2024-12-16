const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const personaRoutes = require('./routes/personaRoutes');
const libroRoutes = require('./routes/libroRoutes');
const volumenRoutes = require('./routes/volumenRoutes');
const prestamoRoutes = require('./routes/prestamoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas
app.use('/api/personas', personaRoutes);
app.use('/api/libros', libroRoutes);
app.use('/api/volumenes', volumenRoutes);
app.use('/api/prestamos', prestamoRoutes);

// Servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
