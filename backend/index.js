import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from "cookie-parser";
import authRoute from './routes/auth.js';
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';

// Load environment variables from the .env file
dotenv.config();

// Create an Express application
const app = express();

// Define the port for the server to listen on, defaulting to 8000 if not specified in the environment
const port = process.env.PORT || 8000;

// CORS options to allow requests from any origin and include credentials
const corsOptions = {
   origin: true,
   credentials: true
};

// Disable strict mode for MongoDB queries
mongoose.set("strictQuery", false);

// Function to connect to the MongoDB database
const connect = async () => {
   try {
      // Use mongoose to connect to the MongoDB database using the provided URI
      await mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      });

      // Log a message indicating successful database connection
      console.log('MongoDB connected');
   } catch (error) {
      // Log an error message if the database connection fails
      console.log('MongoDB connection failed');
   }
};

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to enable CORS with the specified options
app.use(cors(corsOptions));

// Middleware to parse cookies in the incoming requests
app.use(cookieParser());

// Define routes for different API endpoints
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

// Start the server, and once it's running, connect to the MongoDB database
app.listen(port, () => {
   connect();
   console.log('Server listening on port', port);
});
