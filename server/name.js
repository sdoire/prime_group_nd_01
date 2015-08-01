var getName = function() {

    var randomNumber = function (min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    };
    var names = ["Bob", "Sam", "James", "Ryan", "Sarah", "Jim", "Scott", "Joel", "Tara", "Corina", "Maria", "PR", "Eric", "Cat", "Skyler", "Suren", "Mikel", "Huck", "Luke", "Josh", "Lisa"];
    var empName = names[randomNumber(0, 20)];
    return empName;
}
module.exports = getName;