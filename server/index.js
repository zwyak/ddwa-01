const express = require("express");
const fs = require('fs');
const path = require('path');
let employees = require('./emp.json');

const app = express();

app.get("/", function(req, res){
    res.set('Content-Type', 'application/json');
    res.json(JSON.stringify(employees));
});

app.listen(3000);
