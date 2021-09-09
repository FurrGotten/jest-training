function hypotenuse (firsSide, secondSide) {
    if(firsSide > 0 && secondSide > 0) {
    return Math.sqrt(Math.pow(firsSide, 2) + Math.pow(secondSide, 2));
    } else {
        return null
    }
}

module.exports = hypotenuse;