# Employee Management System

A complete employee management system with JWT authentication, built with React frontend and Express/MongoDB backend.

## Features

- **JWT Authentication**: Secure login system
- **Employee Profile**: View employee details
- **Leave Management**: Apply for leave and view application status
- **Responsive Design**: Works on desktop and mobile

## Setup Instructions

### Backend Setup

1. Install dependencies:
```bash
npm install
```

2. Start MongoDB (make sure MongoDB is running on your system)

3. Create test employee:
```bash
node seed.js
```

4. Start the backend server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Start the React development server:
```bash
npm start
```

## Test Credentials

- **Email**: john@company.com
- **Password**: password123

## API Endpoints

- `POST /api/auth/login` - Employee login
- `POST /api/auth/register` - Register new employee
- `GET /api/employee/profile` - Get employee profile
- `POST /api/leave` - Apply for leave
- `GET /api/leave` - Get employee's leave applications

## Technology Stack

- **Backend**: Node.js, Express, MongoDB, JWT
- **Frontend**: React, React Router, Axios
- **Authentication**: JWT tokens
- **Database**: MongoDB with Mongoose