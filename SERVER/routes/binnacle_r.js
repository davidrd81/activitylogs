const express = require('express');
const router = express.Router();

const binnacle = require('../controllers/binnacle.controller');

router.get('/api/binnacles', binnacle.getBinnacle);
router.get('/api/binnacle/:id', binnacle.getBinnacleById);
router.post('/api/binnacle', binnacle.createBinnacle );
router.put('/api/binnacle/:id', binnacle.editBinnacle);
router.delete('/api/binnacle/:id', binnacle.deleteBinnacleById);

module.exports = router;