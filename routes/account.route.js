const { createAccount,
        getAccount,
        updateAccount,
        deleteAccount,
        login
    } = require('../controller/account.controller');
const router = require('express').Router();
const {checkToken} = require('../authenticator/token_validation');

router.post("/register", checkToken, createAccount);
router.get("/find", checkToken, getAccount);
router.patch("/update", checkToken, updateAccount);
router.delete("/delete", checkToken, deleteAccount);
router.post("/login", login);


module.exports = router;