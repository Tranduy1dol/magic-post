const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    },
    warehouse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'warehouse'
    },
    office: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'office'
    },
    timeStamp: Date,
    status: String
});

module.exports = mongoose.model('transaction', transactionSchema);