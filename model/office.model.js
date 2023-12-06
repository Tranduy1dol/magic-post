const mongoose = require('mongoose');

const officeSchema = new mongoose.Schema({
    name: { 
        type: String,
        require: true
    },
    address: { 
        type: String,
        require: true
    },
    managerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account'
    },
    warehouseID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'warehouse'
    }
});

module.export = mongoose.model('office', officeSchema);