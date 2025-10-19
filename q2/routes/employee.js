const express = require('express');
const Employee = require('../models/Employee');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/profile', auth, async (req, res) => {
  try {
    const employee = await Employee.findById(req.user.id).select('-password');
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;