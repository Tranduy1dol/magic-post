const account = require("../model/account.model");

module.exports = {
    createAccount: (data, callback) => {
        const Account = new account({
            name: data.name, 
            email: data.email,
            password: data.password,
            phone: data.phone,
            role: data.role,
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
    getAccountByUsername: (data, callback) => {
        const filter = {
            $or: [
                {email: data.email},
                {userName: data.user_name},
                {phone: data.phone}
            ]
        };
        account.find(filter)
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    updateAccount: (data, callback) => {
        const filter = {
            $or: [
                {name: data.name},
                {email: data.email},
                {userName: data.user_name},
                {phone: data.phone}
            ]
        };
        const update = {
            $set: {
                name: data.new_name,
                email: data.new_email,
                userName: data.new_user_name,
                phone: data.new_phone
            }
        };
        account.updateOne(filter, update)
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    updatePassword: () => {},
    deleteAccount: (data, callback) => {
        const filter = {
            $or: [
                {name: data.name},
                {email: data.email},
                {userName: data.user_name},
                {phone: data.phone}
            ]
        }; 
        account.deleteOne(filter)
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            });
    },
}