require('./models/db');

var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var bodyparser = require('body-parser');

const employeeController = require('./controllers/employeeController');

var app = express();

//for body parser
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

//setup views using handlebars
app.set('views', path.join(__dirname,'/views/'));
app.engine('hbs', exphbs({
   extname: 'hbs',
   defaultLayout: 'mainLayout',
   layoutsDir: __dirname + '/views/layouts/'
}));
app.set('view engine', 'hbs');

//start server with this port
app.listen(5000, () => {
    console.log("Express server started at port: 5000");
});

app.use('/employee', employeeController);