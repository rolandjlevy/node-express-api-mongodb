const { connect, connection, set } = require('mongoose');

module.exports = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('Invalid / Missing environment variable: MONGODB_URI');
    }
    if (!connection.readyState) {
      set('strictQuery', false);
      await connect(process.env.MONGODB_URI);
      console.log('Connected to MongoDB successfully');
    }
    return;
  } catch (error) {
    console.error('Connection failed:', error.message);
    process.exit(1);
  }
};
