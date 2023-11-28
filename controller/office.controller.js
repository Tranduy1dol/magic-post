const { createOffice,
        getOffice,
        getOfficeByInfor,
        updateOffice,
        deleteOffice
}   = require("../service/office.service");

module.exports = {
    createOffice: (req, res) => {
        const body = req.body;
        createOffice(body, (err, results) => {
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
    getOffice:(req, res) => {
        getOffice((err, results) => {
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
    getOfficeByInfor: (req, res) => {},
    updateOffice: (req, res) => {
        const body = req.body;
        updateOffice(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "failed to update office"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    deleteOffice: (req, res) => {
        const data = req.body;
        deleteOffice(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "office not found"
                });
            }
            return res.json({
                success: 1,
                message: "office delete successfully"
            });
        });
    }
}