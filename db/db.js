const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect(
    'mongodb+srv://ojbanat:nWlMsnZlakCvFqEm@cluster0.0ntwbez.mongodb.net/'
  );
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, ' Connection Error'));
  db.once('open', () => {
    console.log('connected to Mongo DB');
  });
};

module.exports = connectDB;
