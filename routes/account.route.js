const { createAccount,
        getAccount,
        updateAccount,
        deleteAccount,
        login
    } = require('../controller/account.controller');
const router = require('express').Router();
//const {checkToken} = require('../authenticator/token_validation');

router.post("/register", createAccount);
router.get("/find", getAccount);
router.patch("/update", updateAccount);
router.delete("/delete", deleteAccount);
router.post("/login", login);


module.exports = router;