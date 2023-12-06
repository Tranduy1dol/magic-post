const warehouse = require("../model/warehouse.model");

module.exports = {
    createWarehouse: (data, callback) => {
        const Warehouse = new warehouse({
            name: data.name,
            address: data.address,
            managerID: data.manager_id
        })
        Warehouse.save()
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    getWarehouse: (callback) => {
        warehouse.find({})
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    getWarehouseByInfor: (data, callback) => {
        const filter = {
            $or: [
                {address: data.address},
                {name: data.name},
                {managerID: data.manager_id}
            ]
        };
        warehouse.find(filter)
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    updateWarehouse: (data, callback) => {
        const filter = {
            $or: [
                {name: data.name},
                {address: data.address},
                {managerID: data.manager_id}
            ]
        };
        const update = {
            $set: {
                name: data.new_name,
                address: data.address,
                managerID: data.new_manager
            }
        };
        warehouse.updateOne(filter, update)
        .then((result) => {
            return callback(null, result);
        })
        .catch((error) => {
            return callback(error);
        })
    },
    deleteWarehouse: (data, callback) => {
        warehouse.deleteOne({ name: data.name })
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },
}