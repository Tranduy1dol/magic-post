const { createWarehouse,
        getWarehouse,
        getWarehouseByInfor,
        updateWarehouse,
        deleteWarehouse
    } = require("../service/warehouse.service");

module.exports = {
    createWarehouse: (req, res) => {
        const body = req.body;
        createWarehouse(body, (err, results) => {
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
    getWarehouse: (req, res) => {
        getWarehouse((err, results) => {
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
    getWarehouseByInfor: (req, res) => {

    },
    updateWarehouse: (req, res) => {
        const body = req.body;
        updateWarehouse(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "failed to update warehouse data"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    deleteWarehouse: (req, res) => {
        const data = req.body;
        deleteWarehouse(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "warehouse not found"
                });
            }
            return res.json({
                success: 1,
                message: "warehouse delete successfully"
            });
        });
    }
}