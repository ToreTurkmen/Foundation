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
  var user = {
    login: "",
    password: "",
    firstName: "",
    lastName: "",
    getFullName: function () { 
      return this.firstName + " " + this.lastName;
    //   user.getFullName() 
  }
  }