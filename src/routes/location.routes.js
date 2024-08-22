const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController')
router.post('/location', locationController.saveLocation);

router.get('/locations/:idusuario', locationController.getLocationByUserId);

module.exports = router;
