const express = require('express');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const employee = await Employee.findOne({ email });
    
    if (!employee || !(await employee.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: employee._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, employee: { id: employee._id, name: employee.name, email: employee.email } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/register', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ message: 'Employee registered successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;