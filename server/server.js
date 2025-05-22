const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const { MongoMemoryServer } = require('mongodb-memory-server');

const app = express();

// Connect to MongoDB Memory Server for development
async function connectDB() {
  try {
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await mongoose.connect(uri);
    console.log('MongoDB Memory Server connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}

connectDB();

// Middleware
app.use(express.json());

// Ensure admin user exists
async function ensureAdminUser() {
  try {
    const admin = await User.findOne({ email: 'admin@gmail.com', role: 'admin' });
    if (!admin) {
      const hashedPassword = bcrypt.hashSync('admin123', 10);
      await User.create({
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: hashedPassword,
        role: 'admin'
      });
      console.log('Admin user created');
    }
  } catch (err) {
    console.error('Error ensuring admin user:', err);
  }
}

// Routes
app.use('/auth', require('./routes/auth'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  ensureAdminUser();
});