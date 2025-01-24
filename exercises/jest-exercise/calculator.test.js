
const calculator = require("./calculator");


test.skip("check add function with 3 and 1", () => {
    expect(calculator.add(3,1)).toBe(4);
})

test.skip("check subtract function with 3 and 1", () => {
    expect(calculator.subtract(3,1)).toBe(2);
})


test.skip("check divide function with 4 and 2", () => {
    expect(calculator.divide(4,2)).toBe(2);
})


test.skip("check multiply with 3 and 2", () => {
    expect(calculator.multiply(3,2)).toBe(6);
})

