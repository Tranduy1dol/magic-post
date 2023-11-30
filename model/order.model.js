const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    senderName: String,
    receiverName: String,
    senderAddress: String,
    receiverAddress: String,
    orderLine: String,
    price: Number,
    weight: Number,
    sendTime: Date
});

module.exports = mongoose.model('order', orderSchema);