const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String, 
    password: String,
    phone: String, 
    userName: String, 
    roleID: {type: mongoose.Schema.Types.ObjectId, ref: 'Role'},
    pointID: {type: mongoose.Schema.Types.ObjectId, ref: ''},
})

module.exports = mongoose.model('accountSchema', accountSchema);