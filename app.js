require('dotenv').config();
const express = require('express');
const connect = require('./config/database');

const accountRouter = require('./routes/account.route');
const warehouseRouter = require('./routes/warehouse.route');
const officeRouter = require('./routes/office.route');
const orderRouter = require('./routes/order.route');
const transRouter = require('./routes/transaction.route');
const app = express();

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(express.static('views'));

app.use('/account', accountRouter);
app.use('/warehouse', warehouseRouter);
app.use('/office', officeRouter);
app.use('/order', orderRouter);
app.use('/transaction', transRouter);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
})

app.listen(process.env.APP_PORT, function() {
    console.log("good " + process.env.APP_PORT);
})



//xây dựng api
//xây dựng CRUD cho các phân quyền khác nhau
//làm chức năng login phân quyền bằng middleware và mongoDB
//test chức năng và xử lý lỗi (handle error)
//deploy