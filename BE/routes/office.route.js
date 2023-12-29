const { createOffice,
        getOffice,
        updateOffice,
        deleteOffice,
        getOfficeByInfor
    } = require("../controller/office.controller");

const router = require('express').Router();

router.post("/create", createOffice);
router.get("/show", getOffice);
router.get("/find", getOfficeByInfor);
router.patch("/update", updateOffice);
router.delete("/delete", deleteOffice);

module.exports = router;