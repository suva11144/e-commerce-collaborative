const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

router.post('/admin-login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, role: 'admin' });
  if (!user) return res.status(401).json({ message: 'Admin not found' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });
  // Generate JWT and return
  res.status(200).json({ message: 'Login successful', user: { id: user._id, email: user.email, role: user.role } });
});

module.exports = router;