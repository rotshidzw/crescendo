const request = require('supertest');
const app = require('../app'); // Assuming your app is exported from app.js
const mongoose = require('mongoose');
const Product = require('../models/Product');

// Connect to a test database before running tests
beforeAll(async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// Disconnect from the test database after running tests
afterAll(async () => {
  await mongoose.disconnect();
});

describe('Product API', () => {
  // Test the GET /api/products route
  it('should get all products', async () => {
    const response = await request(app).get('/api/products');
    console.log(response.status); // Debugging: Log the response status
    console.log(response.body);   // Debugging: Log the response body
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  }, 5000); // Increase the timeout to 10000 ms

  // Test the POST /api/products route
  it('should create a new product', async () => {
    const newProduct = {
      name: 'Sample Product',
      price: 19.99,
      description: 'A sample product for testing',
    };

    const response = await request(app)
      .post('/api/products')
      .send(newProduct);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
  });

  // Add more test cases for other routes and scenarios
});
