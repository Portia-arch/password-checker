const Check = require("../src/pswdChecker");

describe("passwordIsValid", function() {
  describe("validates the password", function() {
    let password = "N4472157o#";

    it("throws an error when password is empty", function() {
      expect(Check.passwordIsValid("")).toBe("");
    });
    it("throws an error when password length is less than 8", function() {
      expect(
        Check.passwordIsValid("N4472157o#")
          .split("")
          .join("").length
      ).toBe(">8");
    });

    it("throws an error when the password has no lowercase character", function() {
      expect(Check.passwordIsValid("N4472157o#")).toMatch(/[a-z]/);
    });

    it("throws an error when the password has no UPPERCASE character", function() {
      expect(Check.passwordIsValid("N4472157o#")).toMatch(/[A-Z]/);
    });

    it("throws an error when the password has no digit", function() {
      expect(Check.passwordIsValid("N4472157o#")).toMatch(/[0-9]/);
    });

    it("throws an error when the password has no symbol", function() {
      expect(Check.passwordIsValid("N4472157o#")).toMatch(/[@#$%&]/);
    });
  });
});

describe("passwordIsOk", function() {
  let password = "N4472157o#";

  it("throws an error when password is empty", function() {
    expect(Check.passwordIsValid("")).toMatch("");
  });

  it("throws an error when password length is less than 8", function() {
    expect(
      Check.passwordIsValid("N4472157o#")
        .split("")
        .join("").length
    ).toBe(">8");
  });
});
//     it("returns false if password does not exist", function () {
//         expect(Check.passwordIsOk('')).toBe(false);
//     });

//     it("returns true if password match conditions", function () {
//         expect(Check.passwordIsOk('N4472157o#')).toBe(true);
//     });
// });
