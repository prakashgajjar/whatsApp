const mongoose = require("mongoose");
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL 

const connectDB = async () => {
  try {
    await  mongoose.connect(MONGO_URL);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
