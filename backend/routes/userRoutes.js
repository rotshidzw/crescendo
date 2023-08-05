const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Register a new user
router.post('/register', userController.registerUser);

// Log in user
router.post('/login', userController.loginUser);

// Get user profile
router.get('/profile', authMiddleware.verifyToken, userController.getUserProfile);

// Update user profile
router.put('/profile', authMiddleware.verifyToken, userController.updateUserProfile);

// Update user password
router.put('/password', authMiddleware.verifyToken, userController.updateUserPassword);

// Delete user
router.delete('/profile', authMiddleware.verifyToken, userController.deleteUser);

module.exports = router;
