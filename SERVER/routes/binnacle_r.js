const express = require('express');
const router = express.Router();

const binnacle = require('../controllers/binnacle.controller');

router.get('/api/binnacle', binnacle.getBinnacle);

module.exports = router;