const account = require("../model/account.model");

module.exports = {
    //create account with name, email, password, phone number and role -> director, manager
    createAccount: (data, callback) => {
        const Account = new account({
            name: data.name, 
            email: data.email,
            password: data.password,
            phone: data.phone,
            role: data.role,
            office: data.office,
            warehouse: data.warehouse
        });
        

        Account.save()
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },

    //show manager account -> director
    getManagerAccount: (callback) => {
        account.find({role: 'manager'})
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },

    //show employee account in office/warehouse -> manager
    getEmployeeAccount: (data, callback) => {
        const filter = {
            $or: [
                {warehouse: data.warehouse},
                {office: data.office}
            ]
        }
        console.log('filter ',filter);
        account.find(filter)
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            })
    },

    //find account by email, phone number -> director, manager
    getAccountByUsername: (data, callback) => {
        const filter = {
            $or: [
                {email: data.email},
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

    //update account information -> director, manager
    updateAccount: (data, callback) => {
        const filter = {
            $or: [
                {name: data.name},
                {email: data.email},
                {phone: data.phone}
            ]
        };
        const update = {
            $set: {
                name: data.new_name,
                email: data.new_email,
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

    //change password -> director, manager, employee
    changePassword: () => {},

    //delete password by email, name, phone number -> director, manager
    deleteAccount: (data, callback) => {
        const filter = {
            $or: [
                {name: data.name},
                {email: data.email},
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