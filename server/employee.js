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

module.exports.Employee = Employee;

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

module.exports.IndustrialEmployee = IndustrialEmployee;

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

module.exports.VehicleEmployee = VehicleEmployee;

const iemployee = new IndustrialEmployee('School', true);
iemployee.setName('Harry Newman');
iemployee.setBirth('1990-03-14');
iemployee.setSex('male');
iemployee.setExperience(10);
iemployee.setSalary(1400);
iemployee.setCompany("College");

const vemployee = new VehicleEmployee('Train', 'Undeground');
vemployee.setName('Roxen');
vemployee.setBirth('1996-03-14');
vemployee.setSex('female');
vemployee.setExperience(4);
vemployee.setSalary(790);
vemployee.setCompany("MT");

const employees = [iemployee, vemployee];
module.exports.employees = employees;
