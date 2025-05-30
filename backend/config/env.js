require('dotenv').config();

const requiredEnvVars = ['MONGO_URI', 'JWT_SECRET', 'PORT', 'AI_API_KEY'];

requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    throw new Error(`Environment variable ${varName} is missing`);
  }
});

module.exports = {
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT ||  aiApiKey: process.env.AI_API_KEY
};