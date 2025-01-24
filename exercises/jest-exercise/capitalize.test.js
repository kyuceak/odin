const capitalize = require("./capitalize");



test.skip('capitalizes word javascript', () => {
    expect(capitalize("javascript")).toBe("Javascript")
});
