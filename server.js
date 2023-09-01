let express = require('express');

let app = express();

app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database:'imcs'
});
    connection.connect(function(error) { if (error) console.log(error);});

let router = require('./routes');
app.use('/', router);

app.listen(8001, function () {
    console.log('Runnings on port 8001');
})