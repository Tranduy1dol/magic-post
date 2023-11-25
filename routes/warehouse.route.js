const { createWarehouse,
        getWarehouse,
        updateWarehouse,
        deleteWarehouse
    } = require("../controller/warehouse.controller");

const router = require('express').Router();

router.post("/create", createWarehouse);
router.get("/find", getWarehouse);
router.patch("/update", updateWarehouse);
router.delete("/delete", deleteWarehouse);

module.exports = router;