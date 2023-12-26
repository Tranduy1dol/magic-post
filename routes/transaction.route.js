const { createTrans,
        getTrans,
        getTransByInfor,
        updateTrans,
        deleteTrans
    }   = require('../controller/transaction.controller');

const router = require('express').Router();

router.post('/create', createTrans);
router.get('/show', getTrans);
router.get('/find', getTransByInfor);
router.patch('/update', updateTrans);
router.delete('/delete', deleteTrans);

module.exports = router;