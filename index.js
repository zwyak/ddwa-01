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

function loadEmployees(employess){
  var container = document.querySelector('#employees');
  for (var i = 0; i < employees.length; i++) {
    var tr = document.createElement('tr');
    tr.id = employees[i].getName();
    tr.innerHTML = '<td>' + employees[i].getName() + '</td>'
                 + '<td>' + employees[i].getBirth() + '</td>'
                 + '<td>' + employees[i].getExperience() + '</td>'
                 + '<td>' + employees[i].getCompany() + '</td>'
                 + '<td>' + "<a class='updateLink' href='#'>UPDATE</a>" + '<br>' + "<a class='deleteLink' href='#'>DELETE</a>" + '</td>'
    container.appendChild(tr);
  }
}

var vemployee = new VehicleEmployee('Train', 'Undeground');
vemployee.setName('Ivanov Andrei');
vemployee.setBirth('1990-01-13');
vemployee.setExperience(5);
vemployee.setCompany('MinskTrans');

var iemployee = new IndustrialEmployee('Work', true);
iemployee.setName('Ushakova Anastasia');
iemployee.setBirth('1994-01-13');
iemployee.setExperience(2);
iemployee.setCompany('MTW');

var employees = [vemployee, iemployee];

loadEmployees(employees);
