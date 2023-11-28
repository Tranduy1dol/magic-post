const { createAccount,
        getAccount,
        updateAccount,
        deleteAccount,
        getAccountByUsername
    } = require('../service/account.service');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

module.exports = {
    createAccount: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        createAccount(body, (err, results) => {
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
    getAccount: (req, res) => {
        getAccount((err, results) => {
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
    updateAccount: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        //body.new_password = hashSync(body.new_password, salt);
        updateAccount(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "failed to update data"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    deleteAccount: (req, res) => {
        const data = req.body;
        deleteAccount(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "record not found"
                });
            }
            return res.json({
                success: 1,
                message: "account delete successfully"
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getAccountByUsername(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    data: "invalid username or password"
                });
            }
            const result = compareSync(body.password, results[0].password);
            if(result) {
                results.password = undefined;
                const secret = process.env.SECRET_TOKEN;
                //const jsontoken = sign({result: results}, secret, { expriresIn: '1h' });
                return res.json({
                    success: 1,
                    message: "login successfully",
                    //token: jsontoken
                });
            } else {
                return res.json({
                    success: 0,
                    message: "invalid username or password"
                });
            }
        });
    }
}