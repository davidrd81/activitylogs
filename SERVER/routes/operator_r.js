const express = require('express');
const router = express.Router();

const user = require('../controllers/user.controller');

router.get('/api/users', user.getUsers );
router.get('/api/user/:id', user.getUser );
router.post('/api/user', user.createUser );
router.put('/api/user/:id', user.editUser );
router.delete('/api/user/:id', user.deleteUser );

module.exports = router;