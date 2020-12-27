var fileToTest = "validation";
jest.dontMock("../" + fileToTest);

var rewire = require("rewire");
var component = rewire("../_temp_test/" + fileToTest);
var checkEmail = component.__get__("ACC.validation.checkEmail");

describe("Validation Functions", function () {
    it("Should be no validate the email", function () {
        var testValue = 'test_test.com';
        expect(checkEmail(testValue)).toBe(false);
    });
    it("Should be validate the email", function () {
        var testValue = 'test@test.com';
        expect(checkEmail(testValue)).toBe(true);
    });
});
