// const express = require('express');
// const User = require('../models/User');
// const {authMiddleware, roleMiddleware} = require('../middleware/authMiddleware');

// const router = express.Router();

// // Only admin & superadmin
// router.get('/users',
//   authMiddleware,
//   roleMiddleware(['admin','superadmin']),
//   async (req,res)=>{
//     const users = await User.find();
//     res.json(users);
//   }
// );

// module.exports = router;

const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');
const {
  createAdmin,
  getUsers,
  deleteUser
} = require('../controllers/adminController');

// SuperAdmin only
router.post('/create-admin', auth, role(['superadmin']), createAdmin);

// Admin only
router.get('/users', auth, role(['admin']), getUsers);
router.delete('/users/:id', auth, role(['admin']), deleteUser);

module.exports = router;
