const express = require('express');
   const router = express.Router();
   const clientController = require('../controllers/clientController');

   
   // Ruta para añadir un nuevo cliente
   router.get('/', clientController.getclients);
   router.post('/add', clientController.addNewClient);
   router.get('/sucursal/:sucursalId', clientController.getClientesSucursal);
   
   
   module.exports = router;   