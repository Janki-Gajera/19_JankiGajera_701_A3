require('dotenv').config();
const mongoose = require('mongoose');
const Employee = require('./models/Employee');

const seedEmployee = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    const employee = new Employee({
      employeeId: 'EMP001',
      name: 'John Doe',
      email: 'john@company.com',
      password: 'password123',
      department: 'IT',
      position: 'Software Developer'
    });

    await employee.save();
    console.log('Test employee created successfully');
    console.log('Email: john@company.com');
    console.log('Password: password123');
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

seedEmployee();