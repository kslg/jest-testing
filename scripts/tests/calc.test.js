// So first things first, we need to import the  function that we're testing from the calc.js file.  
// And we're assigning this to  a constant because we don't want it to accidentally get overwritten somehow.

const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});