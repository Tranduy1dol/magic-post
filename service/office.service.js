const office = require("../model/office.model");

module.export = {
    //create office by name, address and link to an manager, warehouse -> director
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

    //show all office -> director
    getOffice: (callback) => {
        office.find({})
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            });
    },

    //search office by name, address, manager, warehouse -> director
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

    //update office information -> director
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

    //delete office -> director
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
    },
}
