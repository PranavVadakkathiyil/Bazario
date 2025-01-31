# Bazario -  E-commerce Platform

Bazario is a modern multivendor e-commerce application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The platform allows to register, manage their stores, and sell products while providing a seamless shopping experience for customers.

## Features

### User Features:

- User authentication with JWT
- Wishlist management
- Secure checkout with Razorpay integration
- Product browsing and searching
- Order tracking and history

### Vendor Features:

- Store registration and management
- Product listing and inventory control
- Order management and fulfillment
- Earnings and sales tracking

### Admin Features:

- User and vendor management
- Product and category management
- Order monitoring and reports
- Payment and refund handling

## Tech Stack

- **Frontend**: React.js, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Payment Gateway**: Razorpay

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/bazario.git
   cd bazario
   ```

2. Install dependencies for both frontend and backend:

   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up environment variables in a `.env` file:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY=your_razorpay_key
   ```

4. Start the development server:

   ```sh
   cd server
   npm run dev
   ```

   In another terminal, start the frontend:

   ```sh
   cd client
   npm start
   ```

## API Endpoints

[View full API documentation on Postman](your_postman_link_here)

| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/products` | Fetch all products |
| POST | `/api/orders` | Place an order |
| GET | `/api/vendors` | Fetch vendor details |

## Model Documentation
[Click here to view the model documentation](#)

## Contribution

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the MIT License.

---

Developed with ❤️ by [Your Name]

