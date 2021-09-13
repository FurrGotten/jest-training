const hypotenuse = require('./functions');

it('Finds hypotenuse 3 and 4 to be equal to 5', () => {
    expect(hypotenuse(3, 4)).toBe(5);
});
it('Finds hypotenuse 6 and 8 to be equal to 10', () => {
    expect(hypotenuse(6, 8)).toBe(10);
});
it('Finds hypotenuse 6 and 9 to be close to 10', () => {
    expect(hypotenuse(6, 9)).toBeCloseTo(10.8, 1);
});
it('needs to return Null if one of arguments is 0', () => {
    expect(hypotenuse(0, 9)).toBeNull();
    expect(hypotenuse(6, 0)).toBeNull();
});
it('still needs to return result 10 if one of arguments, 6, 8, is an string', () => {
    expect(hypotenuse("6", 8)).toBe(10);
});
it('any non-number as argument needs to return Null', () => {
    expect(hypotenuse("meh", 4)).toBeNull();
});
it('any lower then 1 as argument needs to return Null', () => {
    expect(hypotenuse(-5, 4)).toBeNull();
});
it('needs to return Null if, at least one argument is undefined', () => {
    expect(hypotenuse(undefined, 4)).toBeNull();
    expect(hypotenuse(6, undefined)).toBeNull();
});
it('needs to return Null if, at least one argument is Infinity', () => {
    expect(hypotenuse(Infinity, 4)).toBeNull();
    expect(hypotenuse(3, Infinity)).toBeNull();
});
it('needs to return Null if, at least one argument is Null', () => {
    expect(hypotenuse(null, 4)).toBeNull();
    expect(hypotenuse(3, null)).toBeNull();
});
it('needs to return Null if, at least one argument is NaN', () => {
    expect(hypotenuse(NaN, 4)).toBeNull();
    expect(hypotenuse(3, NaN)).toBeNull();
});
