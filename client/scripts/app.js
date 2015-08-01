$(document).ready(function(){
    $('.jumbotron').on('click', '.generateProject', function(){
        $('#project').children().remove();
        $('#employees').children().remove();
        createProject();
    });

    $('body').on('click','#btnAssign',function(){
        createEmployee();
        companySprints();
    });

    $('body').on('click', '#btnMore', function() {
        createEmployee();
        companySprints();
    });
});

function randomNumber (min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

var companyName;
var projectCompany;
var clientSide;
var frontEnd;
var serverSide;
var fePoints = 0;
var csPoints = 0;
var ssPoints = 0;

function createProject(){
    companyName = ["Dysfunction Function", "Berries Bananas", "Terminal", "Farmers Only"];
    projectCompany = companyName[randomNumber(0,3)];
    clientSide = randomNumber(10,60);
    frontEnd = randomNumber(10,60);
    serverSide = randomNumber(10,60);
    $('#project').append("<h3>Project: " + projectCompany + "</h3>");
    $('#project').append("<h4>Scrum Resources Needed</h4>");
    $('#project').append("<h4>Front End: " + frontEnd + "</h4>");
    $('#project').append("<h4>Client Side: " + clientSide + "</h4>");
    $('#project').append("<h4>Server Side: " + serverSide + "</h4>");
    $('#project').append("<button id='btnAssign'>Assign Staff</button>");

}

function createEmployee(){
    $.ajax({
        url: '/data-request',
        type: 'GET',
        dataType: 'json',
        async: false,
        success: function(data){
            createRoster(data);
        },
        error: function(error){
            console.log("GONG!! " + error);
        }
    });
}
var feFilled = 0;
var csFilled = 0;
var ssFilled = 0;

function createRoster(data) {
    var roster = [];
    roster.push(data);
    $('#employees').append("<h4>Name: " + data.name + "</h4>");
    $('#employees').append("<h4>Skill: " + data.skill + "</h4>");
    $('#employees').append("<h4>Sprint: " + data.sprint + "\n</h4>");
    if (data.skill == "Front End") {
        feFilled++;
        fePoints+= data.sprint;
        console.log(fePoints + " here");
    }
    if (data.skill == "Client Side") {
        csFilled++;
        csPoints+= data.sprint;
    }
    if (data.skill == "Server Side") {
        ssFilled++;
        ssPoints+= data.sprint;
    }
    if (feFilled > 0 && csFilled > 0 && ssFilled > 0) {
        console.log("If satisfied");
    } else {
        createEmployee();
    }
    return fePoints;
}

function companySprints (){
    $('#sprints').children().remove();
    var feSprints = Math.ceil(frontEnd / fePoints);
    var csSprints = Math.ceil(clientSide / csPoints);
    var ssSprints = Math.ceil(serverSide / ssPoints);
    var neededSprints = Math.max(feSprints, csSprints, ssSprints);
    $('#sprints').append("<h4>Sprints Needed</h4>");
    $('#sprints').append("<h5>Front End Sprints: " + feSprints + "</h5>");
    $('#sprints').append("<h5>Client Side Sprints: " + csSprints + "</h5>");
    $('#sprints').append("<h5>Server Side Sprints: " + ssSprints + "</h5>");
    $('#sprints').append("<h5>Sprints Needed: " + neededSprints + "</h5>");
    $('#sprints').append("<button id='btnMore'>I Need More People!</button>");
}


