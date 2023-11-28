const office = require("../model/office.model");

module.export = {
    createOffice: (data, callback) => {
        const Office = new office({
            name: data.name,
            address: data.address,
            managerID: data.manager_id,
            warehouseID: data.warehouse_id
        });
        Office.save()
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    getOffice: (callback) => {
        office.find({})
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            });
    },
    getOfficeByInfor: (data, callback) => {
        const filter = {
            $or: [
                {name: data.name},
                {address: data.address},
                {managerID: data.manager_id},
                {warehouseID: data.warehouse_id}
            ]
        };
        office.find(filter)
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            });
    },
    updateOffice: (data, callback) => {
        const filter = {
            $or: [
                {name: data.name},
                {address: data.address},
                {managerID: data.manager_id},
                {warehouseID: data.warehouse_id}
            ]
        };
        const update = {
            $set: {
                name: data.new_name,
                address: data.new_address,
                managerID: data.new_manager,
                warehouseID: data.new_warehouse
            }
        };
        office.updateOne(filter, update)
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            })

    },
    deleteOffice: (data, callback) => {
        const filter = {
            $or: [
                {name: data.name},
                {address: data.address},
                {managerID: data.manager_id},
                {warehouseID: data.warehouse_id}
            ]
        };
        office.deleteOne(filter)
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            })
    }
}