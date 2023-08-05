const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');
const userRoutes = require('../routes/userRoutes');
const authRoutes = require('../routes/authRoutes'); // Add this line
const userController = require('../controllers/userController');

describe('User API', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.1', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase(); // Drop the test database
    await mongoose.disconnect();
  });

  describe('POST /api/register', () => {
    it('should register a new user', async () => {
      const newUser = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'testpassword',
      };

      const response = await request(app)
        .post('/api/register')
        .send(newUser);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('_id');
    });
  });

  describe('POST /api/login', () => {
    it('should log in a user', async () => {
      const credentials = {
        email: 'test@example.com',
        password: 'testpassword',
      };

      const response = await request(app)
        .post('/api/login')
        .send(credentials);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
    });
  });

  describe('GET /api/profile', () => {
    beforeEach(async () => {
      await User.deleteMany({}); // Clear the User collection before each test
    });

    it('should get user profile', async () => {
      // Your test code here
    });
  });

  describe('PUT /api/profile', () => {
    beforeEach(async () => {
      await User.deleteMany({}); // Clear the User collection before each test
    });

    it('should update user profile', async () => {
      // Your test code here
    });
  });

  describe('PUT /api/password', () => {
    beforeEach(async () => {
      await User.deleteMany({}); // Clear the User collection before each test
    });

    it('should update user password', async () => {
      // Your test code here
    });
  });

  describe('DELETE /api/profile', () => {
    beforeEach(async () => {
      await User.deleteMany({}); // Clear the User collection before each test
    });

    it('should delete user profile', async () => {
      // Your test code here
    });
  });
});
