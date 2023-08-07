const request = require('supertest');
const app = require('../app'); // Assuming your Express app is in app.js
const mongoose = require('mongoose');
const Order = require('../models/Order');

describe('Order API', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.1', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.disconnect();
  });

  describe('POST /api/orders', () => {
    it('should create a new order', async () => {
      const newOrder = {
        userId: 'user_id_here', // Replace with actual user ID
        products: [
          { productId: 'product_id_1', quantity: 2 },
          { productId: 'product_id_2', quantity: 3 },
        ],
      };

      const response = await request(app)
        .post('/api/orders')
        .send(newOrder);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('success', true);
    });
  });

  describe('GET /api/orders/:orderId', () => {
    it('should get an order by orderId', async () => {
      // Create a test order in the database
      const testOrder = await Order.create({
        userId: 'user_id_here', // Replace with actual user ID
        products: [
          { productId: 'product_id_1', quantity: 2 },
          { productId: 'product_id_2', quantity: 3 },
        ],
      });

      const response = await request(app).get(`/api/orders/${testOrder._id}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body.data).toHaveProperty('userId', 'user_id_here');
    });
  });

  // Add more test cases for other order operations

});
