const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    senderID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    receiverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    orderLine: String,
    price: Number,
    weight: Number,
    sendTime: Date
});

module.exports = mongoose.model('order', orderSchema);