module.exports = { passwordIsValid, passwordIsOk}

// let condition1 = ("");
// let condition2 = ("=>9");
let condition1 = /[a-z]/;
let condition2 = /[A-Z]/;
let condition3 = /[@#$%&]/;
let condition4 = /[0-9]/;

password = "N4472157o#";

//Check if password is valid
function passwordIsValid(password) {
    // password = "N4472157o#";
  try {
    if (password == !"") {
      throw "password should exist";
    }
     else if (password.length <= 8) {
        throw "password should be longer than than 8 characters";
    }
      else if (!password.match(condition1) == null) {
         throw "password should have at least one lowercase letter";
    }
      else if (!password.match(condition2) == null) {
          throw "password should have at least one uppercase letter";
    }
      else if (!password.match(condition3) == null) {
          throw "password should have at least one symbol";
    }
      else if (!password.match(condition4) == null) {
          throw "password should have at least one digit";
    } else {
      return password;
    } 
  }
  catch (error) {
    console.log("error" + error);
  

}
}
console.log(passwordIsValid("N4472157o#"));

//check if password is ok
function passwordIsOk(password) {
  // let password = "N4472157o#";

  if ((password.toString() !== "") && (password.toString().length >= 9)) {

    if (((!password.match(condition1) || !password.match(condition2) || !password.match(condition3) || !password.match(condition4)))) {
      return true;
  }

    return false;
  }
}
console.log(passwordIsOk("N4472157o#"));