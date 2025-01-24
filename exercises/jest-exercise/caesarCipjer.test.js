

const cipher = require("./caesarCipher");


test("check cipher with abc and shiftfactor 2", () => {
    expect(cipher("abc",2)).toBe("cde");
});


test("check cipher with xyz and shiftfactor 3", () => {
    expect(cipher("xyz",3)).toBe("abc");
});

test("check cipher with HeLLo and shiftfactor 3", () => {
    expect(cipher("HeLLo",3)).toBe("KhOOr");
});


test("check cipher with Hello, World! and shiftfactor 3", () => {
    expect(cipher("Hello, World!",3)).toBe("Khoor, Zruog!");
});

