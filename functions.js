function hypotenuse (firstSide, secondSide) {
    if(typeof firstSide === "number" && typeof secondSide === "number" && firstSide > 0 && secondSide > 0) {
    return Math.sqrt(firstSide**2 + secondSide**2);
    } else {
        return null
    }
}

module.exports = hypotenuse;