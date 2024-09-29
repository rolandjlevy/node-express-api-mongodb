const { connect, set } = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("Invalid / Missing environment variable: MONGODB_URI");
    }
    set("strictQuery", false);
    await connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
