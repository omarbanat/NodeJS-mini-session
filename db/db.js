const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;

const connectDB = () => {
  mongoose.connect(MONGO_URL);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, ' Connection Error'));
  db.once('open', () => {
    console.log('connected to Mongo DB');
  });
};

module.exports = connectDB;
