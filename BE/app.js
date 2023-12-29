require('dotenv').config();
const express = require('express');
const connect = require('./config/database');

const accountRouter = require('./routes/account.route');
const warehouseRouter = require('./routes/warehouse.route');
const officeRouter = require('./routes/office.route');
const orderRouter = require('./routes/order.route');
const transRouter = require('./routes/transaction.route');
const customerRouter = require('./routes/customer.route');
const app = express();

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(express.static('views'));

app.use('/account', accountRouter);
app.use('/warehouse', warehouseRouter);
app.use('/office', officeRouter);
app.use('/order', orderRouter);
app.use('/transaction', transRouter);
app.use('/customer', customerRouter);

app.listen(process.env.APP_PORT, function() {
    console.log("good " + process.env.APP_PORT);
})



//build api -> done
//build CRUD -> done
//build analysts -> done
//build middleware -> done
//test feature and handle error -> not yet
//connect with front-end -> on going
//deploy -> not necessary