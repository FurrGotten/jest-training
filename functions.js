function hypotenuse (firstSide, secondSide) {
    // Number(x) returns number or NaN
    if (typeof firstSide === 'string') firstSide = Number(firstSide);
    if (typeof secondSide === 'string') secondSide = Number(secondSide);
    // > 0 also checks for NaN
    if (firstSide !== Infinity && secondSide !== Infinity && firstSide > 0 && secondSide > 0) {
    return Math.sqrt(firstSide**2 + secondSide**2);
    } else {
        return null
    }
}

module.exports = hypotenuse;