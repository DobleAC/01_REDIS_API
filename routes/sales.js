const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

// Ruta para obtener todas las ventas
router.post('/:ventasId/sucursal/:sucursalId', salesController.postVenta);



module.exports = router;