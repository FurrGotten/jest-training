function hypotenuse (firstSide, secondSide) {
    if (typeof firstSide === 'string') firstSide = Number(firstSide);
    if (typeof secondSide === 'string') secondSide = Number(secondSide);
    if (firstSide === Infinity || secondSide === Infinity) {
        return null
    } else if (firstSide > 0 && secondSide > 0) {
    return Math.sqrt(firstSide**2 + secondSide**2);
    } else {
        return null
    }
}

module.exports = hypotenuse;