const express = require('express');
const router = express.Router();

const schedule = require('../controllers/area.controller');

router.get('/api/area', schedule.getArea );
router.get('/api/area/:id', schedule.getAreaById );
router.post('/api/area', schedule.createArea );
router.put('/api/area/:id', schedule.editArea );
router.delete('/api/area/:id', schedule.deleteArea );

module.exports = router;