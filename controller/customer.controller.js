const { createCustomer,
        getCustomer,
        updateCustomer,
        deleteCustomer,    
} = require('../service/customer.service');

module.exports = {
    createCustomer: (req, res) => {
        const body = req.body;
        createCustomer(body, (err, results) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connect failed"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getCustomer: (req, res) => {
        getCustomer((err, results) => {
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
    updateCustomer: (req, res) => {
        const body = req.body;
        updateCustomer(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "failed to update information"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    deleteCustomer: (req, res) => {
        const data = req.body;
        deleteCustomer(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "record not found"
                });
            }
            return res.json({
                success: 1,
                message: "account delete successfully"
            });
        });
    }
}