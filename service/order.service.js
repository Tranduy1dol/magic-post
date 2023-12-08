const order = require("../model/order.model");

module.exports = {
    createOrder: (data, callback) => {
        const Order = new order({
            senderID: data.sender,
            receiverID: data.receiver,
            orderLine: data.line,
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
    getOrder: (callback) => {
        office.find({})
            .then((results) => {
                return callback(null, results);
            })
            .catch((error) => {
                return callback(error);
            });
    },
    getOrderByInfor: (data, callback) => {
        const filter = {
            $or: [
                {send: data.sender},
                {receive: data.receiver},
                {sendTime: data.time}
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
    printOrder: () => {},
    updateOrder: (data, callback) => {
        const filter = {
            $or: [
                {sender: data.sender},
                {receiver: data.receiver},
                {sendAddress: data.send_address},
                {receiveAddress: data.receive_address},
                {sendTime: data.time}
            ]
        };
        const update = {
            $set: {
                sender: data.new_sender,
                receiver: data.new_receiver,
                sendAddress: data.new_send_address,
                receiveAddress: data.new_receive_address,
                sendTime: data.new_time
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
    } 
}