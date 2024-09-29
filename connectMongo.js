const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    await connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Connection failed:", error.message);
  }
};

module.exports = connectDB;
