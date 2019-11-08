// let condition1 = ("");
// let condition2 = ("=>9");
let condition1 = /[a-z]/;
let condition2 = /[A-Z]/;
let condition3 = /[@#$%&]/;
let condition4 = /[0-9]/;
let error;

function passwordIsValid(password) {
  //  password = "N4472157o#";
  try {
    if (password == "") {
      throw "password should exist";
    } else {
      return password;
    }
  } catch (error) {
    console.log("error" + error);
  }
  try {
    if (password.length <= 8) {
      throw "password should be longer than than 8 characters";
    } else {
      return password;
    }
  } catch (error) {
    console.log("error" + error);
  }
  try {
    if (!password.match(condition1) == null) {
      throw "password should have at least one lowercase letter";
    } else {
      return password;
    }
  } catch (error) {
    console.log("error" + error);
  }
  try {
    if (!password.match(condition2) == null) {
      throw "password should have at least one uppercase letter";
    } else {
      return password;
    }
  } catch (error) {
    console.log("error" + error);
  }
  try {
    if (!password.match(condition3) == null) {
      e;
      throw "password should have at least one symbol";
    } else {
      return password;
    }
  } catch (error) {
    console.log("error" + error);
  }

  try {
    if (!password.match(condition4) == null) {
      throw "password should have at least one digit";
    } else {
      return password;
    }
  } catch (error) {
    console.log("error" + error);
  }
}
console.log(passwordIsValid("N4472157o#"));

function passwordIsOk(password) {
  //  password = "N4472157o#";
  if (
    password !== "" &&
    password.length > 8 &&
    (!password.match(condition1) ||
      !password.match(condition2) ||
      !password.match(condition3) ||
      !password.match(condition4))
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(passwordIsOk("N4472157o#"));

module.exports = { passwordIsValid, passwordIsOk };
