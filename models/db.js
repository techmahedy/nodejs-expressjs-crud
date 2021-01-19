const mongoose = require('mongoose');
var URL = 'mongodb://127.0.0.1:27017/express';
var config = { useNewUrlParser: true };

mongoose.connect(URL, config, error => {
    error ? console.log("Failed!") : console.log("Connect successfully!");
});

require('./employee.model');