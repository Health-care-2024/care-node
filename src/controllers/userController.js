const db = require("../config/database");

const getAllUsers = async (req, res) => {
    try {
        const [results] = await db.query("SELECT * FROM usuario");
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error buscando usuarios" });
    }
};

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const [results] = await db.query('SELECT * FROM usuario WHERE idusuario = ?', [userId]);

        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json(results[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al recuperar el usuario' });
    }
};

module.exports = {
    getAllUsers,
    getUserById
}
