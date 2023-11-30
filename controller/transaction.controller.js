const { createTrans,
        getTrans,
        getTransByInfor,
        updateTrans,
        deleteTrans
    }   = require('../service/transaction.service');

module.exports = {
    createTrans: (req, res) => {
        const body = req.body;
        createTrans(body, (err, results) => {
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
        })
    },
    getTrans: (req, res) => {
        getTrans((err, results) => {
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
    getTransByInfor: (req, res) => {
        const body = req.body;
        getTransByInfor(body, (err, results) => {
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
                data: results
            });
        });
    },
    updateTrans: (req, res) => {
        const body = req.body;
        updateTrans(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "failed to update transaction"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    deleteTrans: (req, res) => {
        const data = req.body;
        deleteTrans(data, (err, results) => {
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
                message: "transaction delete successfully"
            });
        });
    }
}