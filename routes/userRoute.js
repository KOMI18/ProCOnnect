const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/auth_middleWare');
const userController   = require('../controllers/users/UserController');
const companyController = require('../controllers/company/conpanyController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/me', authenticateToken, userController.getCurrentUser);
router.post('/company', companyController.createCompany);

module.exports = router;
