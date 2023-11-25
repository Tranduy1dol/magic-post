const { createAccount,
        getAccount,
        updateAccount,
        deleteAccount,
        login
    } = require('../controller/account.controller');
const router = require('express').Router();
const {checkToken} = require('../authenticator/token_validation');
const {createAcc} = require("../service/account.service")
// router.post("/register", checkToken, createAccount);
router.post("/register", createAccount);
router.get("/find", checkToken, getAccount);
router.patch("/update", checkToken, updateAccount);
router.delete("/delete", checkToken, deleteAccount);
router.post("/login", checkToken, login);

router.post("/create", createAcc)

module.exports = router;