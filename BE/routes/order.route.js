const { createOrder,
    getOrder,
    getOrderByInfor,
    updateOrder,
    deleteOrder,
    printOrder
}   = require("../controller/order.controller");

const router = require('express').Router();

router.post("/create", createOrder);
router.get("/show", getOrder);
router.get("/find", getOrderByInfor);
router.patch("/update", updateOrder);
router.delete("/delete", deleteOrder);

module.exports = router;