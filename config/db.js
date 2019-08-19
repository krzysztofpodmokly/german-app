const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MONGO_URI');

const connect = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true
    });
    console.log('Connected to database!');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connect;
