const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Biblioteca", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a la base de datos Biblioteca");
  } catch (error) {
    console.error("Error al conectar a MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
