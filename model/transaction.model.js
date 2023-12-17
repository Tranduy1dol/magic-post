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
    target: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'warehouse',
        default: ''
    },
    timeStamp: Date,
    //status: storing, transporting, office
    status: String
});

module.exports = mongoose.model('transaction', transactionSchema);