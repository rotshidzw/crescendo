const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET all products
router.get('/products', productController.getAllProducts);

// GET a single product by ID
router.get('/products/:productId', productController.getProductById);

// POST create a new product
router.post('/products', productController.createProduct);

// PUT update a product
router.put('/products/:productId', productController.updateProduct);

// DELETE delete a product
router.delete('/products/:productId', productController.deleteProduct);

router.get('/:id', productController.getProductById);

module.exports = router;
