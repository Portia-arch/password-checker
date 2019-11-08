const Check = require("../src/pswdChecker");

describe("passwordIsValid", function() {
  describe("validates the password", function() {
    let password = "N4472157o#";

    it("should not be empty", function() {
      expect(Check.passwordIsValid("")).toBe("");
    });
    it("should not be less than 8 characters", function() {
      expect(
        Check.passwordIsValid("N4472157o#")
          .split("")
          .join("").length
      ).toBe(">8");
    });

    it("should have at least one lowercase letter", function() {
      expect(Check.passwordIsValid("N4472157o#")).toMatch(/[a-z]/);
    });

    it("should have at least one UPPERCASE letter", function() {
      expect(Check.passwordIsValid("N4472157o#")).toMatch(/[A-Z]/);
    });

    it("should have at least one digit", function() {
      expect(Check.passwordIsValid("N4472157o#")).toMatch(/[0-9]/);
    });

    it("should have a special character", function() {
      expect(Check.passwordIsValid("N4472157o#")).toMatch(/[@#$%&]/);
    });
  });
});

describe("passwordIsOk", function() {
  let password = "N4472157o#";

  it("should no be empty", function() {
    expect(Check.passwordIsValid("")).toMatch("");
  });

  it("should not be less than 8", function() {
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
