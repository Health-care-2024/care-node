const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para obtener todos los usuarios
router.get('/users', userController.getAllUsers);

// Ruta para obtener un usuario por ID
router.get('/users/:id', userController.getUserById);

module.exports = router;
