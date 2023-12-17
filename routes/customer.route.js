const { createCustomer,
        getCustomer,
        updateCustomer,
        deleteCustomer,
} = require('../controller/customer.controller')
const router = require('express').Router();

router.post("/create", createCustomer);
router.get("/show", getCustomer);
router.patch("/update", updateCustomer);
router.delete("/delete", deleteCustomer);

module.exports = router;