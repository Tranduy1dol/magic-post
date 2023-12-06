const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    name: {   
        type: String,
        require: true
    },
    email: { 
        type: String,
        require: true
    }, 
    password: { 
        type: String,
        require: true
    },
    phone: { 
        type: String,
        require: true
    }, 
    userName: { 
        type: String,
        require: true
    }, 
    role: { 
        type: String,
        require: true,
        default: "customer"
    },
    pointID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'office'
    },
})

module.exports = mongoose.model('account', accountSchema);