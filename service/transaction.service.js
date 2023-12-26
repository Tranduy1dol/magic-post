const trans = require('../model/transaction.model');

module.exports = {
    //create transaction and status when received/send an order -> employee
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

    // getTrans: (callback) => {
    //     trans.find({})
    //         .then((results) => {
    //             return callback(null, results);
    //         })
    //         .catch((error) => {
    //             return callback(error);
    //         });
    // },

    //searching progress of order by orderID -> customer
    showProgressByOrderID: (data, callback) => {
        // const filter = {
        //     $or: [
        //         {order: data.order},
        //         {warehouse: data.warehouse},
        //         {office: data.office},
        //         {time: data.time}
        //     ]
        // };
        trans.find(data.order).sort({timeStamp: -1})
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error)
            });
    },

    //update transaction feature by orderID, warehouseID, officeID, timestamp -> employee
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

    //delete transaction feature by orderID, warehouseID, officeID, timestamp -> employee
    deleteTrans: (data, callback) => {
        const filter = {
            $or: [
                {order: data.order},
                {warehouse: data.warehouse},
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
    },
    //statistic storing, transporting order in warehouse -> director, manager
    warehouseStatistic: (data, callback) => {
        let pipeline = [];
        if(data.warehouse_id) {
            pipeline.push({
                $match: {
                    warehouse: mongoose.Types.ObjectId(data.warehouse_id)
                }
            });
        }
        pipeline.push(
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 }
                }
            },
            {
                $match: {
                    _id: { $in: ['storing', 'transporting'] }
                }
            }
        );
        trans.aggregate(pipeline)
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            });
    }
}
