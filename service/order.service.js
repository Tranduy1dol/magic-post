const { pushDuplicatePolicy } = require("@redis/time-series/dist/commands");
const order = require("../model/order.model");

module.exports = {

    //create order by senderID, receiverID, description, price, weight, day -> employee
    createOrder: (data, callback) => {
        const Order = new order({
            senderID: data.sender,
            receiverID: data.receiver,
            description: data.description,
            price: data.price,
            weight: data.weight,
            sendTime: data.time
        });
        Order.save()
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            });
    },

    //show all order -> director, manager, employee
    getOrder: (callback) => {
        office.find({})
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            });
    },

    //search order by sender, receiver, send day or status -> manager, employee
    getOrderByInfor: (data, callback) => {
        const filter = {
            $or: [
                {send: data.sender},
                {receive: data.receiver},
                {sendTime: data.time},
                {status: data.status}
            ]
        };
        order.find(filter)
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            })
    },

    //print order information -> employee
    printOrder: () => {},

    //update order information -> employee
    updateOrder: (data, callback) => {
        const filter = {
            $or: [
                {sender: data.sender},
                {receiver: data.receiver},
                {sendTime: data.time},
                {status: data.status}
            ]
        };
        const update = {
            $set: {
                sender: data.new_sender,
                receiver: data.new_receiver,
                sendTime: data.new_time,
                status: data.new_status
            }
        };
        order.updateOne(filter, update) 
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error)
            })
    },
    //update target warehouse -> employee

    //delete order -> employee
    deleteOrder: (data, callback) => {
        const filter = {
            $or: [
                {sender: data.sender},
                {receiver: data.receiver},
                {sendAddress: data.send_address},
                {receiveAddress: data.receive_address},
                {sendTime: data.time}
            ]
        };
        order.deleteOne(filter)
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    
    //statistic order in office by receiver/sender office -> director, manager
    statisticOrderInOffice: (data, callback) => {
        const pipeline = [
            {
                $lookup: {
                    from: 'customer',
                    localField: 'senderID',
                    foreignField: '_id',
                    as: 'sender'
                }
            },
            {
                $lookup: {
                    from: 'customer',
                    localField: 'receiverID',
                    foreignField: '_id',
                    as: 'receiver'
                }
            }
        ];

        if(data.office_id) {
            pipeline.push({
                $match: {
                    office: mongoose.Types.ObjectId(data.office_id)
                }
            });
        }

        pipeline.push(
            {
                $group: {
                    _id: '$sender.officeID',
                    sendingCount: {
                        $sum: {
                            $cond: [{ $eq: ['$status', 'sending'] }, 1, 0]
                        }
                    },
                    receivingCount: {
                        $sum: {
                            $cond: [{ $eq: ['$status', 'sending'] }, 0, 1]
                        }
                    }
                }
            }
        );
        order.aggregate(pipeline)
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    //statistic order in office by status -> employee
    statisticOrderByStatus: (data, callback) => {
        const pipeline = [
            {
                $lookup: {
                    from: 'customers',
                    localField: 'senderID',
                    foreignField: '_id',
                    as: 'sender'
                }
            },
            {
                $match: {
                    'sender.officeID': mongoose.Types.ObjectId(data.office_id)
                }
            },
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 }
                }
            }
        ]
        order.aggregate(pipeline)
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            })
    },
}

//progress: customer send -> create order, bill -> send order to warehouse -> receive order from warehouse -> send order to customer


