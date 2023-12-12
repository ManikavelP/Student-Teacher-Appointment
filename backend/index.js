import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import teacherRoute from "./Routes/teachersRouters.js"

try {
  dotenv.config();
} catch (err) {
  console.error('Error loading .env file:', err);
}

const app = express();

const port = process.env.PORT || 8000;

const corsOptions = {
  origin: 'http://localhost:5174', 
};

// Database connection
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to database');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from database');
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log('MongoDB is connected');
  } catch (err) {
    console.error('Mongodb connection failed:', err);
  }
};


// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute)
app.use("/api/v1/users",userRoute)
app.use("/api/v1/teachers",teacherRoute);



app.get('/', (req, res) => {
  res.send('API is working');
});

app.listen(port, () => {
  connectDB();
  console.log('Server is running on port ' + port);
});
