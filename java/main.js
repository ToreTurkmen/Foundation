// function getPercentage(percent, amount) {
//   //perce = amount * percent / 100
//   var result;
//   result = amount * percent / 100;
//   return result;
//   }

  // //new
  // const getPercentage = (percent, amount) => {
  //   return amount * percent / 100;
    
  // }

  // var firstName = 'Tore';
  // function accessGlobalScope () {
  //   firstName = "Name has been changed";
  // }
  // function localVariableFunction () {
  //   var lastName;
  //   lastName = "Last name has been changed";
  // }
  // function localVariable (){
  //   assdDevProperty = "this is a local variable"
  // }

  // var object;
  // object = {
  // name: "tore",
  // lastName: "Turkmen",
  // age: 40,
  // // object.age
  // getFullName: function () { 
  //   return "tore Turkmen";
  //   // object.getFullName();
  // }
  // };

  // var user = {
  //   login: "String",
  //   password: "String",
  //   firstName: "String",
  //   lastName: "String",
  //   // user ["firstName"]
  //   "full name":""
  // }
  // var user = {
  //   login: "",
  //   password: "",
  //   firstName: "",
  //   lastName: "",
  //   getFullName: function () { 
  //     return this.firstName + " " + this.lastName;
  //   //   user.getFullName() 
  // }
  // }
  // var user = {
  //   firstName: "Tore",
  //   lastName: "Turkmen"
  // }
  // var referenceToUser = user;
  // user.lastName = "Beg";
  // referenceToUser.firstName = "Merw";

  // function getLastname () { return "some return value";}
  // var referenceToFunction = getLastname;

  // function Car() {
  //   this.first = 5;
  //   this.last = "Coron";
  // }
  // var luxuryCar = new Car();

  // Car.prototype.author = "Tore";

  function Car(brand, year) {
    this.brand = brand;
    this.year = year;
    this.engine = "stopped";
  }

  Car.prototype.start = function() {
    this.engine = "started";
  };

  Car.prototype.stop = function() {
    this.engine = "stopped";
  };


  var oldCar = new Car("Toyota",2022);
  var newCar = new Car("Ferrari", 2023);

  function update(){
    this.test = 1;
  }