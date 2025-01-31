# Bazario -  E-commerce Platform

Bazario is a modern multivendor e-commerce application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The platform allows to register, manage their stores, and sell products while providing a seamless shopping experience for customers.

## Features

### User Features:

- User authentication with JWT
- Wishlist management
- Secure checkout with Razorpay integration
- Product browsing and searching
- Order tracking and history


### Admin Features:

- User and order management
- Product and category management
- Order monitoring and reports
- Payment and refund handling

## Tech Stack

- **Frontend**: React.js, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Payment Gateway**: Razorpay and cash on delivery

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/PranavVadakkathiyil/Bazario.git
   cd Bazario
   ```

2. Install dependencies for both frontend and backend:

   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables in a `.env` file:

   ```env
   PORT=****
   MONGODB_URI="****"
   CLOUDINARY_API_KEY="****"
   CLOUDINARY_API_SECRET="****"
   CLOUDINARY_NAME="****"
   ACCESS_TOKEN_SECRET="****"
   ACCESS_TOKEN_EXPIRY="****"
   RAZORPAY_KEY_ID="****"
   RAZORPAY_KEY_SECRET="****"
   ADMIN_USERNAME="****"
   ADMIN_PASSWORD="****"
   
   ```

4. Start the development server:

   ```sh
   cd backend
   npm run dev
   ```

   In another terminal, start the frontend:

   ```sh
   cd frontend
   npm run dev
   ```

## API Endpoints

# API Endpoints

This document describes the API endpoints for the application.

## User Routes (`/api/v1/users`)

| Method | Endpoint        | Description                                     | Authentication |
| :----- | :-------------- | :---------------------------------------------- | :------------- |
| POST   | `/register`     | Register a new user. Accepts `avatar` (image) as multipart/form-data. | No           |
| POST   | `/login`        | Login an existing user.                         | No           |
| POST   | `/logout`       | Logout the current user.                        | Yes          |

## Product Routes (`/api/v1/product`)

| Method | Endpoint          | Description                                                                 | Authentication |
| :----- | :---------------- | :-------------------------------------------------------------------------- | :------------- |
| POST   | `/addproduct`     | Add a new product. Accepts `image1`, `image2`, `image3`, and `image4` (images) as multipart/form-data. | Admin Only   |
| POST   | `/editproduct`    | Edit an existing product. Accepts `image1`, `image2`, `image3`, and `image4` (images) as multipart/form-data. | Admin Only   |
| POST   | `/singleproduct` | Get details of a single product.                                           | No           |
| POST   | `/deleteproduct` | Delete a product.                                                           | Admin Only   |
| POST   | `/listallproduct`| List all products.                                                          | No           |

## Order Routes (`/api/v1/order`)

| Method | Endpoint          | Description                                   | Authentication |
| :----- | :---------------- | :-------------------------------------------- | :------------- |
| POST   | `/getallorders`  | Get all orders for the authenticated user.   | Yes          |
| POST   | `/orderinrazorpay`| Create an order using Razorpay payment gateway. | Yes          |
| POST   | `/orderincash`   | Create an order using cash on delivery.      | Yes          |

## Cart Routes (`/api/v1/cart`)

| Method | Endpoint      | Description                                     | Authentication |
| :----- | :------------ | :---------------------------------------------- | :------------- |
| POST   | `/getcart`    | Get the cart for the authenticated user.        | Yes          |
| POST   | `/addtocart`  | Add an item to the cart.                      | Yes          |
| POST   | `/deleteitem` | Delete an item from the cart.                 | Yes          |


**Authentication:**

* **Yes:** Requires a valid JWT (JSON Web Token) in the `Authorization` header.
* **No:** No authentication required.
* **Admin Only:** Requires a valid JWT and the user must have admin privileges.

**Request Body:**  Refer to the specific controller functions for the required request body parameters for each endpoint.  The product endpoints that handle images use `multipart/form-data`.

**Response:**  The response format will typically be JSON.  Refer to the specific controller functions for details on the response structure.

[View full API documentation on Postman](https://documenter.getpostman.com/view/28842830/2sAYX3phhH)



## Model Documentation
[Click here to view the model documentation](https://app.eraser.io/workspace/EeXiUATN1fPIRkkO7YvS?origin=share)

## Contribution

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the MIT License.

---

Developed with ❤️ by Pranav V

