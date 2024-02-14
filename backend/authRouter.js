// authRouter.js
const express = require('express');
const router = express.Router();
const authController = require('./authController');
const User = require('./userModel'); // Assuming you have a User model

// Register route
router.post('/register', async (req, res) => {
  try {
    const { username, password, roles } = req.body;
    const hashedPassword = await authController.hashPassword(password);

    const newUser = new User({ username, password: hashedPassword, roles });
    await newUser.save();

    const token = authController.generateToken(newUser);
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  // Implement login logic here using the hashed password and generateToken function
});

// Delete account route
router.delete('/delete', async (req, res) => {
  // Implement delete account logic here
});

module.exports = router;
