const express = require('express');
const Leave = require('../models/Leave');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const leave = new Leave({
      ...req.body,
      employeeId: req.user.id
    });
    await leave.save();
    res.status(201).json(leave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const leaves = await Leave.find({ employeeId: req.user.id }).sort({ appliedDate: -1 });
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;