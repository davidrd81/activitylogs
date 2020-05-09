const express = require('express');
const router = express.Router();

const binnacle = require('../controllers/binnacle.controller');

router.get('/api/binnacles', binnacle.getBinnacle);
router.get('/api/binnacles/:id', binnacle.getBinnacleById);
router.post('/api/binnacles', binnacle.createBinnacle );
router.put('/api/binnacles/:id', binnacle.editBinnacle);
router.delete('/api/binnacles/:id', binnacle.deleteBinnacleById);

module.exports = router;