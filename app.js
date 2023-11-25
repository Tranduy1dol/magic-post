require('dotenv').config();
const express = require('express');
const connect = require('./config/database');
const app = express();
const accountRouter = require('./routes/account.route');

// app.set('views', '/views');
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.use(express.static('views'));
app.use('/account', accountRouter);

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