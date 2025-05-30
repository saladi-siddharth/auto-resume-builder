const mongoose = require('mongoose');
const Resume = require('../backend/models/Resume');
const User = require('../backend/models/User');
const connectDB = require('../backend/config/database');

async function seedDatabase() {
  await connectDB();

  const user = new User({
    name: 'Test User',
    email: 'test@example.com',
    password: 'password123'
  });
  await user.save();

  const resume = new Resume({
    userId: user._id,
    template: 'modern',
    data: {
      name: 'Test User',
      email: 'test@example.com',
      phone: '123-456-7890',
      summary: 'Sample resume',
      experience: [],
      education: [],
      skills: []
    }
  });
  await resume.save();

  console.log('Database seeded');
  mongoose.connection.close();
}

seedDatabase();