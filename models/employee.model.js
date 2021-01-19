const mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required!'
    },
    email: {
        type: String,
        required: 'This field is required!'
    },
    mobile: {
        type: String,
        required: 'This field is required!'
    },
    city: {
        type: String,
        required: 'This field is required!'
    }
});

mongoose.model('Employee',EmployeeSchema);