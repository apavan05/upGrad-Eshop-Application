upGrad E-Shop Application

Project Overview

This project is a React-based E-Commerce application developed as part of the upGrad Full Stack Development Program.

The application allows users to:

* User Registration and Login
* Browse Products
* Search Products
* Filter Products by Category
* Sort Products
* View Product Details
* Add New Products
* Modify Existing Products
* Delete Products
* Create Orders
* Manage Delivery Addresses

Technology Stack

* React.js
* React Router DOM
* Material UI (MUI)
* Axios
* JavaScript (ES6+)
* HTML5
* CSS3

Project Structure

src/
 ├── common/
 │    ├── api/
 │    ├── constants/
 │    └── context/
 │
 ├── components/
 │    ├── Header/
 │    └── ProductCard/
 │
 ├── screens/
 │    ├── Login/
 │    ├── Signup/
 │    ├── Products/
 │    ├── ProductDetails/
 │    ├── AddProduct/
 │    ├── ModifyProduct/
 │    └── CreateOrder/

Installation

Clone the repository:

git clone <repository-url>

Install dependencies:

npm install

Start the application:

npm start

Build for production:

npm run build

⸻

Backend API Notes

The application has been integrated with the backend APIs provided for the project.

During testing, some backend endpoints may return one of the following HTTP responses depending on the backend configuration or API validation:

* 400 Bad Request
* 401 Unauthorized
* 403 Forbidden
* 500 Internal Server Error

The frontend implementation includes:

* Authentication
* Product Management
* Product Search
* Product Filtering
* Product Sorting
* Address Management
* Order Placement Integration

If backend validation fails or the API configuration differs, order placement or certain protected operations may not complete successfully.


Durga Pavan Babu