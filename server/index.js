require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

mongoose.connect('mongodb://127.0.0.1:27017/dashboard');
console.log(process.env.MONGO_URI);

const app = express();
app.use(express.json());
app.use('/api/admin', require('./routes/adminRoutes'));

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// app.listen(5000, ()=> console.log("Server running"));
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
