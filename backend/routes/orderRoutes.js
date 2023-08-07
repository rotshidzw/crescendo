const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Define routes
router.post('/api/orders', orderController.createOrder);
router.get('/api/orders/:orderId', orderController.getOrderById);
// Add more routes for other order operations

module.exports = router;
