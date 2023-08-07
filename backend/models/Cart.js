// Cart.js

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  // Add more fields as needed
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
