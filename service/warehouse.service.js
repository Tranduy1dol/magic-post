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
    getWarehouseByAddress: (address, callback) => {
        warehouse.find({address: address})
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    getWarehouseByName: () => {},
    getWarehouseByManager: () => {},
    updateWarehouse: (data, callback) => {
        warehouse.updateOne({
            name: data.name,
            address: data.address,
            managerID: data.manager_id
        })
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
    }
}