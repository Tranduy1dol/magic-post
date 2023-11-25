const mongoose = require('mongoose');
const accountSchema = require("../model/account.model");

const warehouseSchema = new mongoose.Schema({
    name: String,
    address: String,
    managerID: String,
})

module.exports = mongoose.model('warehouse', warehouseSchema);