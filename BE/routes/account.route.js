const { createAccount,
        getManagerAccount,
        updateAccount,
        deleteAccount,
        getEmployeeAccount,
        login
    } = require('../controller/account.controller');
const { checkRole,
        checkAccess
    } = require('../middleware/authMiddleware');
const { checkToken
    } = require('../middleware/token_validation');
const router = require('express').Router();



router.post("/register", createAccount);
router.get("/manager", checkToken, checkRole(['director']), checkAccess, getManagerAccount);
router.get("/employee", checkToken, checkRole(['director' ,'manager']), checkAccess, getEmployeeAccount)
router.patch("/update", updateAccount);
router.delete("/delete", deleteAccount);
router.post("/login", login);


module.exports = router;