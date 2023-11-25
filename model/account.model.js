const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    //_id: {type: mongoose.Schema.Types.ObjectId},
    name: String,
    email: String, 
    password: String,
    phone: String, 
    userName: String, 
    role: String,
    pointID: {type: mongoose.Schema.Types.ObjectId, ref: ''},
})

module.exports = mongoose.model('account', accountSchema);