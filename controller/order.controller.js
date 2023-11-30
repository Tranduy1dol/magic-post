const { createOrder,
        getOrder,
        getOrderByInfor,
        updateOrder,
        deleteOrder,
        printOrder
}   = require("../service/order.service");

module.exports = {
    createOrder: (req, res) => {
        const body = req.body;
        createOrder(body, (err, results) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connect error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getOrder: (req, res) => {
        getOrder((err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getOrderByInfor: (req, res) => {
        const body = req.body;
        getOrderByInfor(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                succes: 1,
                data: results
            });
        });
    },
    updateOrder: (req, res) => {
        const body = req.body;
        updateOrder(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "failed to update order"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    deleteOrder: (req, res) => {
        const data = req.body;
        deleteOffice(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "order not found"
                });
            } 
            return res.json({
                success: 1,
                message: "order delete successfully"
            });
        })
    },
    printOrder: () => {}
}