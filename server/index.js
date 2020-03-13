const express = require("express");
const emp = require('./employee.js');

let employees = emp.employees;

const app = express();

app.get("/", function(req, res){
    res.set('Content-Type', 'application/json');
    res.json(JSON.stringify(employees));
});

app.listen(3000);
