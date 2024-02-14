// authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  // Create and return a JWT token
  const token = jwt.sign({ userId: user._id, roles: user.roles }, 'your-secret-key', { expiresIn: '1h' });
  return token;
};

const hashPassword = async (password) => {
  // Hash the password using bcrypt
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

module.exports = { generateToken, hashPassword };
