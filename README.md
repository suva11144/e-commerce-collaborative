# E-Commerce Collaborative

A full-stack e-commerce application built with React and Node.js, featuring user authentication, product management, and shopping cart functionality.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Admin Access](#admin-access)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **User Authentication**: Register, login, and user profile management
- **Product Browsing**: View products with filtering and sorting options
- **Shopping Cart**: Add, remove, and update items in cart
- **Checkout Process**: Complete purchase flow
- **Admin Dashboard**: Manage products, orders, and users
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React 19**: UI library
- **Vite**: Build tool
- **Redux Toolkit**: State management
- **React Router**: Navigation
- **Tailwind CSS**: Styling
- **Axios**: API requests

### Backend
- **Node.js**: Runtime environment
- **Express**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication
- **bcryptjs**: Password hashing

## 📁 Project Structure

```
e-commerce-collaborative/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   ├── src/                # Source files
│   │   ├── assets/         # Images and other assets
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Redux store
│   │   └── ...
│   └── ...
├── server/                 # Backend Node.js application
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   └── server.js           # Entry point
└── README.md               # Project documentation
```

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Clone the Repository
```bash
git clone https://github.com/suva11144/e-commerce-collaborative.git
cd e-commerce-collaborative
```

### Install Dependencies

#### Backend
```bash
cd server
npm install
```

#### Frontend
```bash
cd client
npm install
```

## 🏃‍♂️ Running the Application

### Development Mode

#### Backend
```bash
cd server
npm run dev
```
The server will run on http://localhost:5000

#### Frontend
```bash
cd client
npm run dev
```
The client will run on http://localhost:5173

### Production Mode

#### Backend
```bash
cd server
npm start
```

#### Frontend
```bash
cd client
npm run build
npm run preview
```

## 📡 API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login a user
- `POST /auth/admin-login` - Login as admin

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get a specific product
- `POST /products` - Create a new product (admin only)
- `PUT /products/:id` - Update a product (admin only)
- `DELETE /products/:id` - Delete a product (admin only)

### Orders
- `GET /orders` - Get all orders (admin only)
- `GET /orders/user` - Get user's orders
- `POST /orders` - Create a new order
- `PUT /orders/:id` - Update order status (admin only)

## 👑 Admin Access

The application comes with a pre-configured admin account:
- **Email**: admin@gmail.com
- **Password**: admin123

## 🖼️ Screenshots

*Coming soon*

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

---

Created by [Suvamoy](https://github.com/suva11144)
