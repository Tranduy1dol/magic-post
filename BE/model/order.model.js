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
    description: String,
    price: Number,
    weight: Number,
    sendTime: Date,

    //status: sending, failed, succeeded, returning
    status: {
        type: String,
        default: 'sending'
    }
});

module.exports = mongoose.model('order', orderSchema);