const express = require('express');
const router = express.Router();
const branchesController = require('../controllers/branchesController');


router.get('/sucursal/:sucursalId', branchesController.getBranchesBySucursal);
// Obtener todas las sucursales
router.get('/', async (req, res) => {
  try {
    const branches = await redisClient.get('branches');
    if (!branches) {
      return res.status(404).json({ message: 'No branches found' });
    }
    res.json(JSON.parse(branches));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener una sucursal por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const branch = await redisClient.get(`branch:${id}`);
    if (!branch) {
      return res.status(404).json({ message: `Branch with id ${id} not found` });
    }
    res.json(JSON.parse(branch));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
