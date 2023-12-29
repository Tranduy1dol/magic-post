const { connect } = require('http2');
const mongoose = require('mongoose');

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB;

mongoose.connect(`mongodb://${host}:${port}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connect to Database successfully!');
  })
  .catch((error) => {
    console.error('Failed to connect database:', error);
  });

  // kết nối database -> done
  // tích hợp api và database để quản lý user
  