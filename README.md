# MongoDB: Follow-up lesson practice 

---
## Purpose  
- This repository serves as a platform for extended practice in creating two models using MongoDB.

## Requirement 
- To fulfill the objectives of this repository, I have to create two models.

## Fulfillment 
- Created two additional models: customer.js, account.js
- Created two additional controllers: accountControllers.js, customerControllers.js
- Tested GET, POST, PATCH, DELETE on POSTMAN
- Updated server.js

## Skeleton code
```JS
// Terminal commands
// ---------------------------------------------------------------
// Initialize a new Node.js project and create a package.json file
// The -y flag automatically answers "yes" to all prompts, using default values
// npm init -y

// Install the required dependencies:
// - express: Web framework for Node.js
// - dotenv: Loads environment variables from a .env file
// - cors: Middleware for handling Cross-Origin Resource Sharing (CORS)
// - mongoose: MongoDB object modeling tool for Node.js
// npm i express dotenv cors mongoose

// Start the Node.js application using Nodemon in development mode
// Nodemon automatically restarts the server when changes are detected
// nodemon run dev

// Load environment variables from .env file
require('dotenv').config();

// Import the Express web framework
const express = require('express');

// Create an instance of the Express application
const app = express();

// Set the port number for the server, using the value from the environment 
// variable PORT or defaulting to 3000
const PORT = process.env.PORT || 3000;

// Import the function to connect to the MongoDB database
const connectToDb = require('./config/connectToDB');

// Import the CORS middleware
const cors = require('cors');

// Parse incoming request bodies in JSON format
app.use(express.json());

// Enable CORS (Cross-Origin Resource Sharing) for all routes
app.use(cors());

// Call the function to connect to the MongoDB database
connectToDb();

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
    // Log a message to the console when the server starts running
    console.log(`Express Server Listening on port num: ${PORT}`);
});
```
