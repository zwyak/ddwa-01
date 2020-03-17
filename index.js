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

var iemployee = new IndustrialEmployee('School', true);
iemployee.setName('Harry Newman');
iemployee.setBirth('1990-03-14');
iemployee.setSex('male');
iemployee.setExperience(10);
iemployee.setSalary(1400);
iemployee.setCompany("College");

var vemployee = new VehicleEmployee('Train', 'Undeground');
vemployee.setName('Roxen');
vemployee.setBirth('1996-03-14');
vemployee.setSex('female');
vemployee.setExperience(4);
vemployee.setSalary(790);
vemployee.setCompany("MT");

var employees = [iemployee, vemployee];

function employeesLoad(){
  var container = document.querySelector('#employees');
  for (var i = 0; i < employees.length; i++) {
    var tr = document.createElement('tr');
    tr.id = employees[i].name;
    tr.onclick = function(){
      sessionStorage.setItem("name", this.id);
      window.open("./employee.html");
    }
    tr.innerHTML = '<td>' + employees[i].getName() + '</td>'
                 + '<td>' + employees[i].getBirth() + '</td>'
                 + '<td>' + employees[i].getExperience() + '</td>'
                 + '<td>' + employees[i].getCompany() + '</td>'
                 + '<td>' + "<button onlick='alert('ty')'><a class='updateLink' href='#'>UPDATE</a></button>" + '<br>' + "<button><a class='deleteLink' href='#'>DELETE</a></button>" + '</td>'
    container.appendChild(tr);
  }
}

function rowClick(){
  sessionStorage.setItem("name", this.id);
  window.open("./employee.html");
}

function createDetails(employee){
  var emptable = document.querySelector('#employee');
  var tbody = emptable.querySelector('tbody');

  tbody.innerHTML += "<tr><td>Name</td><td>" + employee.getName() + "</td></tr>"
  tbody.innerHTML += "<tr><td>Birth</td><td>" + employee.getBirth() + "</td></tr>"
  tbody.innerHTML += "<tr><td>Sex</td><td>" + employee.getSex() + "</td></tr>"
  tbody.innerHTML += "<tr><td>Experience</td><td>" + employee.getExperience() + "</td></tr>"
  tbody.innerHTML += "<tr><td>Salary</td><td>" + employee.getSalary() + "</td></tr>"
  tbody.innerHTML += "<tr><td>Company</td><td>" + employee.getCompany() + "</td></tr>"

  if (employee instanceof IndustrialEmployee){
    tbody.innerHTML += "<tr><td>Indusrty</td><td>" + employee.getIndustry() + "</td></tr>"
    tbody.innerHTML += "<tr><td>isHarmful</td><td>" + employee.getIsHarmful() + "</td></tr>"
  }else if (employee instanceof VehicleEmployee){
    tbody.innerHTML += "<tr><td>Vehicle</td><td>" + employee.getVehicle() + "</td></tr>"
    tbody.innerHTML += "<tr><td>Type</td><td>" + employee.getType() + "</td></tr>"
  }
}

function employeeSearch(name){
  var res = {};
  for (var i = 0; i < employees.length; i++) {
    if (employees[i].name == name){
      res = employees[i];
      break;
    }
  }

  if (res) createDetails(res);
}

function employeeDelete(name){
  for (var i = 0; i < employees.length; i++) {
    if (employees[i].name == name){
      employees.splice(i, 1);
      break;
    }
  }
}
