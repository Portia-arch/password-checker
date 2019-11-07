// let condition1 = ("");
// let condition2 = ("=>9");
let condition3 = /[a-z]/;
let condition4 = /[A-Z]/;
let condition5 = /[@#$%&]/;
let condition6 = /[0-9]/;
let error

function passwordIsValid(password) {
     password = "";
    try {
        if (password == '') {
            throw "password should exist"
        }
        else {
            return password;
        }
    }
        catch (error) {
        console.log("error" + error)
        }
        try {
            if (password.length < 9) {
                throw "password should be longer than than 8 characters"
            }
            else {
                return password;
            }
        }
        catch (error) {
            console.log("error" + error)
        }
        try {
            if (!password.match(condition3)) {
                throw "password should have at least one lowercase letter"
            }
            else {
                return password;
            }
        }
        catch (error) {
            console.log("error" + error)
        }
        try {
            if (!password.match(condition4)) {
                throw "password should have at least one uppercase letter"
            }
            else {
                return password;
            }
        }
        catch (error) {
            console.log("error" + error)
        }
        try {
            if (!password.match(condition5)) {
                throw "password should have at least one symbol"
            }
            else {
                return password;
            }
        }
        catch (error) {
            console.log("error" + error)
        }
        
        try {
            if (!password.match(condition6)) {
                throw "password should have at least one digit"
            }
            else {
                return password;
            }
        }
        catch (error) {
            console.log("error" + error)
        }
        
    }
       console.log(passwordIsValid())

function passwordIsOk(password) {
    // password = "N4472157o#";
    if (
        password.toString() !=="" &&
        password.toString().length >= 9 &&
        (!password.toString().match(condition3) ||
            !password.toString().match(condition4) ||
            !password.toString().match(condition5) ||
            !password.toString().match(condition6))
    ) {
        return true;
    } 
    
    else {
        return false;
    }
}
// console.log(passwordIsOk())

module.exports = {passwordIsValid, passwordIsOk}