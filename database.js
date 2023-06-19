const mongoose = require("mongoose");
const detenv = require("dotenv");
detenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Could not connect to DB!");
  }
};

module.exports = connectDB;
