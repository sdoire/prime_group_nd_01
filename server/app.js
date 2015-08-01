var express = require('express');
var app = express();
var path = require('path');
var returnName = require('./name');
var returnSkill = require('./skill');
var returnSprint = require('./sprint');
//console.log(returnName.employeeName);
//console.log(returnSkill.employeeSkill);
//console.log(returnSprint.employeeSprint);

var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};



var returnEmployee = function() {
    var employeeObj = {
        name: returnName(),
        skill: returnSkill(),
        sprint: returnSprint()
    }
    return employeeObj
};

// look up toJSON nomenclature - how to use.

app.set('port', (process.env.PORT || 5000));

app.get('/data-request', function(req, res){
    res.json(returnEmployee());
});

app.get('/*', function(req, res){
    var file= req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file));

});

app.listen(app.get('port'), function(){
    console.log("Listening on Port:" + app.get('port'));
});
