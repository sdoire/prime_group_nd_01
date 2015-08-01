var getSprint = function () {
    var randomNumber = function (min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    };
    var empSprint = randomNumber(1, 9);
    return empSprint;
}

module.exports = getSprint;