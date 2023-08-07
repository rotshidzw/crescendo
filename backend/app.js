const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes'); // Import userRoutes
const authRoutes = require('./routes/authRoutes'); // Import authRoutes
const cartRoutes = require('./routes/cartRoutes'); // Import cartRoutes
const orderRoutes = require('./routes/orderRoutes'); // Import orderRoutes

// Load environment variables from .env file
require('dotenv').config();

mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

app.use('/api', productRoutes);
app.use('/api', userRoutes); // Mount userRoutes under '/api'
app.use('/api', authRoutes); // Mount authRoutes under '/api'
app.use('/api', cartRoutes); // Mount cartRoutes under '/api'
app.use('/api', orderRoutes); // Mount orderRoutes under '/api'

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
