const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Define routes
router.post('/orders', orderController.createOrder);
router.get('/orders/:orderId', orderController.getOrderById);

module.exports = router;
