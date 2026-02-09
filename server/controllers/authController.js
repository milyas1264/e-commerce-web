const token = jwt.sign(
  { id: user._id, role: user.role },
  process.env.JWT_SECRET
);
