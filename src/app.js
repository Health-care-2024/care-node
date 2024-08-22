const express = require('express');
const dotenv = require('dotenv');
const locationRoutes = require('./routes/location.routes');
const userRoutes = require('./routes/user.routes'); // Importa las rutas de usuarios

dotenv.config();

const app = express();

//  parsear los cuerpos de las peticiones como JSON
app.use(express.json());

//  rutas
app.use('/api', locationRoutes);
app.use('/api', userRoutes); 


const PORT = process.env.PORT || 3000;
app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
