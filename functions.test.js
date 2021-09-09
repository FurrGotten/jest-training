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
test('any 0 as argument needs to return Null', () => {
    expect(hypotenuse(0, 9)).toBeNull();
});
test('any 0 as argument needs to return Null', () => {
    expect(hypotenuse(6, 0)).toBeNull();
});
test('any non-number as argument needs to return Null', () => {
    expect(hypotenuse("6", 4)).toBeNull();
});
test('any non-number as argument needs to return Null', () => {
    expect(hypotenuse("meh", 4)).toBeNull();
});
test('any lover then 1 as argument needs to return Null', () => {
    expect(hypotenuse(-5, 4)).toBeNull();
});
