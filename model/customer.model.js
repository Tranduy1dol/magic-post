const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: String
    },
    officeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'office'
    },
    phone: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('customer', customerSchema);