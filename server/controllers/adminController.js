const User = require('../models/User');
const bcrypt = require('bcryptjs');

// SuperAdmin → Admin create
exports.createAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const admin = await User.create({
    name,
    email,
    password: hashed,
    role: 'admin'
  });

  res.json(admin);
};

// Admin → Users list
exports.getUsers = async (req, res) => {
  const users = await User.find({ role: 'user' });
  res.json(users);
};

// Admin → Delete user
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: 'User deleted' });
};
