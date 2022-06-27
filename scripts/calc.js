
// just a simple example to get the test to pass.
function addition(num1, num2) {
    return num1 + num2;
}

// before our test will pass  we need to export the function. 
// We need to do this so that the require statement  in our test file works.
module.exports = addition;