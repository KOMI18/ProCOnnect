const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/auth_middleWare');
const userController   = require('../controllers/users/UserController');
const { use } = require('../app');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/me', authenticateToken, userController.getCurrentUser);


module.exports = router;
