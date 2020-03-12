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

function ajaxRequest(method, uri, cb){
  var xhr = new XMLHttpRequest();
  xhr.open(method, uri, true);
  xhr.responseType = 'json';
  xhr.send();

  xhr.onload = function() {
    if (xhr.status == 200){
      var responseObj = JSON.parse(xhr.response);
      cb(responseObj);
    }
  };
}

function loadEmployees(employees){
  var container = document.querySelector('#employees');
  for (var i = 0; i < employees.length; i++) {
    var tr = document.createElement('tr');
    tr.id = employees[i].name;
    tr.innerHTML = '<td>' + employees[i].name + '</td>'
                 + '<td>' + employees[i].birth + '</td>'
                 + '<td>' + employees[i].experience + '</td>'
                 + '<td>' + employees[i].company + '</td>'
                 + '<td>' + "<a class='updateLink' href='#'>UPDATE</a>" + '<br>' + "<a class='deleteLink' href='#'>DELETE</a>" + '</td>'
    container.appendChild(tr);
  }
}

ajaxRequest('GET', 'http://127.0.0.1:3000/', loadEmployees);
