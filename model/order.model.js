const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    senderName: String,
    receiverName: String,
    senderAddress: String,
    receiverAddress: String,
    orderLine: String,
    price: Int32,
    weight: float,
    sendTime: DateTime
});

module.exports = mongoose.model('order', orderSchema);