const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler')
const role = require('../middleware/role');
const accountSchema = require("../model/accountModel");

const createAcc = asyncHandler (async(req, res) => {
    // const {password, name, user_name, phone, email} = req.body;
    // const Account = new accountSchema({
    //     name: name,
    //     password: password,
    //     userName: user_name,
    //     phone: phone,
    //     email: email
    // })
    // Account.save()
    //         .then((result) => {
    //             return callback(null, result);
    //         })
    //         .catch((error) => {
    //             return callback(error);
    //         })
})

module.exports = {createAcc}
module.exports = {
    createAccount: (data, callback) => {
        const Account = new accountSchema({
            _id: data.phone,
            name: data.name, 
            email: data.email,
            password: data.password,
            phone: data.phone,
            userName: data.user_name
        })
        Account.save()
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    getAccount: (callback) => {
        account.find({})
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    getAccountByUsername: (username, callback) => {
        account.find({userName: username})
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    updateAccount: (data, callback) => {
        account.updateOne({
            _id: data.phone,
            name: data.name, 
            email: data.email,
            password: data.password,
            phone: data.phone,
            userName: data.user_name
        })
        .then((result) => {
            return callback(null, result);
        })
        .catch((error) => {
            return callback(error);
        })
    },
    deleteAccount: (data, callback) => {
        account.deleteOne({ _id: data._id })
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },
}