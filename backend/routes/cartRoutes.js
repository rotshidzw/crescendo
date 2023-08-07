// cartRoutes.js

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/add-to-cart', cartController.addToCart);
// Add more routes for other cart operations

module.exports = router;
