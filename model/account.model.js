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

    //role: director, manager, employee
    role: { 
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('account', accountSchema);