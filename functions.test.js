const hypotenuse = require('./functions');

test('Find hypotenuse 3 and 4 to be equal to 5', () => {
    expect(hypotenuse(3, 4)).toBe(5);
});
test('Find hypotenuse 6 and 8 to be equal to 10', () => {
    expect(hypotenuse(6, 8)).toBe(10);
});
test('Find hypotenuse 6 and 9 to be close to 10', () => {
    expect(hypotenuse(6, 9)).toBeCloseTo(10.8, 1);
});
