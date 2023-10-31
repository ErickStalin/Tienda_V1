const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Configuración de Handlebars
const hbs = exphbs.create({ extname: 'hbs' });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Carpeta de archivos estáticos
app.use(express.static(__dirname + '/public'));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor web en ejecución en http://localhost:${PORT}`);
});