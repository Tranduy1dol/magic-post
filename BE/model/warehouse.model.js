const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
    name: String,
    address: String,
    managerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account'
    },
});

module.exports = mongoose.model('warehouse', warehouseSchema);