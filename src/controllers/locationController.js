const Location = require("../models/location");
const db = require('../config/database'); // Asegúrate de importar tu conexión a la base de datos


// Guardar la ubicación
const saveLocation = async (req, res) => {
    try {
        const { userId, latitude, longitude } = req.body;
        if (!userId || !latitude || !longitude) {
            return res.status(400).json({ error: 'Necesitamos todos los datos' });
        }

        // Inserción en la base de datos
        const [result] = await db.query(
            'INSERT INTO locations_gps (userid, latitude, longitude) VALUES (?, ?, ?)',
            [userId, latitude, longitude]
        );

        res.status(201).json({ message: 'Coordenada guardada correctamente!' });
    } catch (err) {
        console.error('Error guardando coordenada', err);
        res.status(500).json({ error: 'Error en la base de datos' });
    }
};

module.exports = {
    saveLocation,
    // Otros métodos exportados
};


const getLocationByUserId = async (req, res) => {
    try {
        const userId = req.params.idusuario;
        const [locations] = await db.query(
            "SELECT * FROM locations_gps WHERE userid= ?",
            [userId]
        );
        if (locations.length === 0) {
            return res.status(404).json({ message: "No se encontraron coordenadas" })
        }
        res.json(locations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al botener coordenadas" });

    }
}

module.exports = {
    saveLocation,
    getLocationByUserId
}