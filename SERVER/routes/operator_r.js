const express = require('express');
const router = express.Router();

const user = require('../controllers/operator.controller');

router.get('/api/operator', user.getUsers );
router.get('/api/operator/:id', user.getUserById );
router.post('/api/operator', user.createUser );
router.put('/api/operator/:id', user.editUser );
router.delete('/api/operator/:id', user.deleteUser );

module.exports = router;