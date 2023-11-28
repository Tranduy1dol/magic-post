const order = require("../model/order.model");

module.exports = {
    createOrder: (data, callback) => {
        const Order = new order({
            senderName: data.sender,
            receiverName: data.receiver,
            senderAddress: data.sender_address,
            receiverAddress: data.receiver_address,
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
            .catch((erorr) => {
                return callback(error);
            });
    },
    getOrderByInfor: () => {},
    printOrder: () => {},
    updateOrder: () => {},
    deleteOffice: () => {}
}