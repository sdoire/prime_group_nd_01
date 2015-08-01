var getSkill = function (){
    var randomNumber = function (min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    };

    var skills = ["Front End", "Client Side", "Server Side"];
    var empSkill = skills[randomNumber(0,2)];
    return empSkill;
}

module.exports = getSkill;