'use strict;'

function Employee(name, birth, sex, experience, salary, company) {
  this.name = name;
  this.birth = birth;
  this.sex = sex;
  this.experience = experience;
  this.salary = salary;
  this.company = company;

  this.getName = function(){
    return this.name;
  }

  this.setName = function(name){
    this.name = name;
  }

  this.getBirth = function(){
    return this.birth;
  }

  this.setBirth = function(birth){
    this.birth = birth;
  }

  this.getSex = function(){
    return this.sex;
  }

  this.setSex = function(sex){
    this.sex = sex;
  }

  this.getExperience = function(){
    return this.experience;
  }

  this.setExperience = function(experience){
    this.experience = experience;
  }

  this.getSalary = function(){
    return this.salary;
  }

  this.setSalary = function(salary){
    this.salary = salary;
  }

  this.getCompany = function(){
    return this.company;
  }

  this.setCompany = function(company){
    this.company = company;
  }
}

function IndustrialEmployee(industry, isHarmful){
  Employee.call(this);

  this.industry = industry;
  this.isHarmful = isHarmful;

  this.getIndustry = function(){
    return this.industry;
  }

  this.setIndustry = function(industry){
    this.industry = industry;
  }

  this.getIsHarmful = function(){
    if (this.isHarmful) return 'Yes';
    else return 'No';
  }

  this.setHarmful = function(isHarmful){
    this.isHarmful = isHarmful;
  }
}

function VehicleEmployee(vehicle, type){
  Employee.call(this);

  this.vehicle = vehicle;
  this.type = type;

  this.getVehicle = function(){
    return this.vehicle;
  }

  this.setVehicle = function(vehicle){
    this.vehicle = vehicle;
  }

  this.getType = function(){
    return this.type;
  }

  this.setType = function(type){
    this.type = type;
  }
}

function loadEmployees(employees){
  var tableRef = document.getElementById('employees');

  for (var i = 0; i < employees.length; i++) {
    var newRow   = tableRef.insertRow();

    var newCellName = newRow.insertCell(0);
    var newCellBirth = newRow.insertCell(1);
    var newCellExperience = newRow.insertCell(2);
    var newCellCompany = newRow.insertCell(3);

    var newTextName  = document.createTextNode(employees[i].getName());
    var newTextBirth = document.createTextNode(employees[i].getBirth());
    var newTextExperience  = document.createTextNode(employees[i].getExperience());
    var newTextCompany = document.createTextNode(employees[i].getCompany());

    newCellName.appendChild(newTextName);
    newCellBirth.appendChild(newTextBirth);
    newCellExperience.appendChild(newTextExperience);
    newCellCompany.appendChild(newTextCompany);
  }
}

var employee = new VehicleEmployee('Train', 'Undeground');
employee.setName('Ivanov Andrei');
employee.setBirth('1990-01-13');
employee.setExperience(5);
employee.setCompany('MinskTrans');

loadEmployees([employee]);
