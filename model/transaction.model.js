const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    order: String,
    warehouse: String,
    office: String,
    timeStamp: Date,
    status: String
});

module.exports = mongoose.model('transaction', transactionSchema);