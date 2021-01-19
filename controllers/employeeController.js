const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/',(request, response) => {
    response.render('employee/addOrEdit',{
        viewTitle: 'Create Employee'
    });
});

router.post('/',(request, response) => {
    if (request.body._id == '')
    {
        insertRecord(request, response);
    }
    updateRecord(request, response);
});

function insertRecord(request, response)
{
    var employee = new Employee();
    employee.fullName = request.body.fullName;
    employee.email    = request.body.email;
    employee.mobile   = request.body.mobile;
    employee.city     = request.body.city;
    employee.save((error,doc)=>{
        !error ? response.redirect('employee/list') 
               : response.redirect('employee');
    });
}

router.get('/list',(request, response) => {
    Employee.find((error, docs) => {
        if (!error) {
            response.render("employee/list", {
                list: docs
            });
        }
        else{
            console.log('Error in retrieving employee list :' + error);
        }
    });
});

function updateRecord(req, res) {
    Employee.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('employee/list'); }
    });
}

router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("employee/addOrEdit", {
                viewTitle: "Update Employee",
                employee: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/employee/list');
        }
        else { console.log('Error in employee delete :' + err); }
    });
});

module.exports = router;