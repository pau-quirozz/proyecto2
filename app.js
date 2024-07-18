const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/tu_otra_base_de_datos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a la base de datos');
}).catch((err) => {
    console.error('Error al conectar a la base de datos', err);
});

// Esquema de la colección
const Schema = mongoose.Schema;
const otroEsquema = new Schema({
    nombre: String,
    edad: Number
});

const OtroModelo = mongoose.model('OtraColeccion', otroEsquema);

// Insertar datos en la colección
const otroDocumento = new OtroModelo({ nombre: 'Maria', edad: 25 });
otroDocumento.save()
    .then(() => console.log('Documento insertado'))
    .catch((err) => console.error('Error al insertar documento', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
