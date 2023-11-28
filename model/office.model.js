const mongoose = require('mongoose');

const officeSchema = new mongoose.Schema({
    name: String,
    address: String,
    managerID: String,
    warehouseID: String
});

module.export = mongoose.model('office', officeSchema);