Tomato: A Food Delivery App

Tomato is a full-featured, responsive food delivery application built using the MERN stack (MongoDB, Express, React, Node.js) with Stripe payment integration. This project delivers a seamless experience for customers, administrators, and delivery personnel, combining a user-friendly frontend, a robust backend, and an intuitive admin panel into a single, comprehensive platform.

Features

Customer Interface (Frontend)

Responsive Design: Developed with React, Tomato offers a fully responsive interface that adapts to various devices, from desktops to mobile screens, ensuring an optimized user experience.
User Authentication: Secure user login and registration using JSON Web Tokens (JWT) to manage sessions and protect user data.
Browse and Search: Users can browse restaurants, view menus, and search for food items by category, popularity, or dietary preference.
Order Management: Customers can place orders, select their preferred delivery address, and track the status of their orders in real-time.
Payment Integration: With Stripe integrated, users can make secure, hassle-free payments directly within the app.
Admin Panel

User Management: Admins can view and manage user accounts, including customer and delivery personnel information.
Menu and Restaurant Management: Easily add, edit, and delete food items, categories, and restaurant details to keep the offerings up to date.
Order Tracking: Real-time monitoring of active and past orders, with controls to update the order status (e.g., received, in-progress, completed, delivered).
Analytics: Track key metrics like popular items, order frequency, and user activity to make informed decisions and improve services.
Backend (Server)

API Development: Built with Express, the backend provides RESTful APIs to handle requests, manage authentication, and connect the frontend and admin panel to the MongoDB database.
Data Storage: MongoDB is used for storing user profiles, order details, restaurant data, and menu items in a scalable and efficient manner.
Real-Time Updates: With WebSockets, users receive live updates on their order status from the moment they place it until delivery.
Security: Data protection and secure endpoints, with encrypted user information and secure payment processing via Stripe.
Technology Stack

Frontend: React, CSS3, Bootstrap/Material UI for styling, and Stripe integration for payment processing.
Backend: Node.js with Express.js, and WebSockets for real-time updates.
Database: MongoDB for efficient, scalable data storage.
Payment Integration: Stripe for secure and seamless payment processing.
