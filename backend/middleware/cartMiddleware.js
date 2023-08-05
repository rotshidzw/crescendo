const Cart = require('../models/Cart');

module.exports = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new Error('User not authenticated');
    }

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      throw new Error('Cart not found');
    }

    req.cart = cart;
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
