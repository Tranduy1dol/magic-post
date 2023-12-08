const customer = require('../model/customer.model');

module.exports = {
    createCustomer: (data, callback) => {
        const Customer = new customer({
            name: data.name,
            address: data.address,
            officeID: data.office_id,
            phone: data.phone,
        });
        Customer.save()
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            });
    },
    getCustomerByInfor: (data, callback) => {
        const filter = {
            $or: [
                {name: data.name},
                {address: data.address},
                {phone: data.phone},
                {officeID: data.office_id}
            ]
        };
        customer.find(filter)
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            });
    },
    getCustomer: (callback) => {
        customer.find({})
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            });
    },
    updateCustomer: (data, callback) => {
        const filter = {
            $or: [
                {name: data.name},
                {address: data.address},
                {phone: data.phone},
                {officeID: data.office_id}
            ]
        };
        const update = {
            $set: {
                name: data.new_name,
                address: data.new_address,
                phone: data.new_phone,
                officeID: data.new_office
            }
        };
        customer.updateOne(filter, update)
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    }, 
    deleteCustomer: (data, callback) => {
        const filter = {
            $or: [
                {name: data.name},
                {address: data.address},
                {phone: data.phone},
            ]
        };
        customer.deleteOne(filter)
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            });
    }
}