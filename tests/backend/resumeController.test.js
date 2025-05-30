const request = require('supertest');
const app = require('../../server');
const mongoose = require('mongoose');

describe('Resume Controller', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a resume', async () => {
    const res = await request(app)
      .post('/api/resumes/create')
      .set('Authorization', 'Bearer mock-token')
      .send({
        template: 'modern',
        data: {
          name: 'Test User',
          email: 'test@example.com'
        }
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.resume).toHaveProperty('_id');
  });
});