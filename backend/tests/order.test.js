const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');
const Order = require('../models/Order');

describe('Order API', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.1', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterEach(async () => {
    await Order.deleteMany(); // Clear the orders collection after each test
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  describe('POST /api/orders', () => {
    it('should create a new order', async () => {
      const newOrder = {
        userId: new mongoose.Types.ObjectId(), // Generate a valid ObjectId
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
        userId: new mongoose.Types.ObjectId(), // Generate a valid ObjectId
        products: [
          { productId: 'product_id_1', quantity: 2 },
          { productId: 'product_id_2', quantity: 3 },
        ],
      });

      const response = await request(app).get(`/api/orders/${testOrder._id}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body.data).toHaveProperty('userId', testOrder.userId.toString());
    });
  });

  // Add more test cases for other order operations
});
