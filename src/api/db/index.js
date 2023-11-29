// db.js
const mongoose = require('mongoose');
const { mongoDB } = require('../../config');

const MONGODB_URI = mongoDB.uri;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
