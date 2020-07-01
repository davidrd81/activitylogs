const express = require('express');
const router = express.Router();

const schedule = require('../controllers/schedule.controller');

router.get('/api/schedule', schedule.getSchedule );
router.get('/api/schedule/:id', schedule.getScheduleById );
router.post('/api/schedule', schedule.createSchedule );
router.put('/api/schedule/:id', schedule.editSchedule );
router.delete('/api/schedule/:id', schedule.deleteSchedule );

module.exports = router;