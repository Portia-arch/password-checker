const Check = require('../src/pswdChecker');

describe("passwordIsValid", function () {
    describe("validates the password", function () {
        it("throws an error when password is empty", function () {
            expect(Check.passwordIsValid('')).toBe("password should exist");
        });
        it("throws an error when password length is less than 9", function () {
            expect(Check.passwordIsValid("ashgnb")).toBe(
                "password should be longer than than 8 characters"
            );
        });

        it("throws an error when the password has no lowercase character", function () {
            expect(Check.passwordIsValid("123456789")).toBe(
                "password should have at least one lowercase letter"
            );
        });

        it("throws an error when the password has no UPPERCASE character", function () {
            expect(Check.passwordIsValid("12345678a")).toBe(
                "password should have at least one uppercase letter"
            );
        });

        it("throws an error when the password has no digit", function () {
            expect(Check.passwordIsValid("babababab~A")).toBe(
                "password should have at least one digit"
            );
        });

        it("throws an error when the password has no symbol", function () {
            expect(Check.passwordIsValid("12345678aA")).toBe(
                "password should have at least one symbol"
            );
        });
    });
});

describe("passwordIsOk", function () {
    it("returns false if password does not match (cond1 and cond2) and At least one ptn", function () {
        expect(Check.passwordIsOk("1234")).toBe(false);
    });

    it("returns true if password match (cond1 and cond2) and At least one ptn", function () {
        expect(Check.passwordIsOk("@@@@@@@@@@@@@")).toBe(true);
    });
});
