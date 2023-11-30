const trans = require('../model/transaction.model');

module.exports = {
    createTrans: (data, callback) => {
        const Trans = new trans({
            order: data.order,
            warehouse: data.warehouse,
            office: data.office,
            timeStamp: data.time,
            status: data.status
        });
        Trans.save()
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            });
    },
    getTrans: (callback) => {
        trans.find({})
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            });
    },
    getTransByInfor: (data, callback) => {
        const filter = {
            $or: [
                {order: data.order},
                {warehouse: data.warehouse},
                {office: data.office},
                {time: data.time}
            ]
        };
        trans.find(filter)
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error)
            });
    },
    updateTrans: (data, callback) => {
        const filter = {
            $or: [
                {order: data.order},
                {warehouse: data.warehouse},
                {office: data.office},
                {time: data.time}
            ]
        };
        const update = {
            $set: {
                order: data.new_order,
                warehouse: data.new_warehouse,
                office: data.new_office,
                time: data.new_time
            }
        };
        trans.updateOne(filter, update)
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    deleteTrans: (data, callback) => {
        const filter = {
            $or: [
                {order: data.order},
                {warehouse: data.warehouse},
                {office: data.office},
                {time: data.time}
            ]
        };
        trans.updateOne(filter)
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            });
    }
}