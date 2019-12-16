


var count = 0;
var checkButtonPress = false;
//count start at zero 
window.onload = function () {
    var newValue = document.getElementById("numberOfPlayerStageMin32").innerHTML = count;
}
//add or subtract number of time user wants to play 
function getRolls() {

    var but1 = document.getElementById("numberOfPlayerStageMin2").onclick = function () {
        if (count > 0) {
            count--;
            var newValue = document.getElementById("numberOfPlayerStageMin32").innerHTML = count;
            localStorage.setItem('appData', newValue);

        }
    };
    var but2 = document.getElementById("numberOfPlayerStageMin4").onclick = function () {
        if (count < 6) {
            count++;
            var newValue = document.getElementById("numberOfPlayerStageMin32").innerHTML = count;
            localStorage.setItem('appData', newValue);

        }
    }



}
//print the result you get from getRoll method
function gets() {

    var co = localStorage.getItem('appData');
    var total = 0;

    var forRandomMethod;
    for (var i = 0; i < co; i++) {
        forRandomMethod = Math.floor((Math.random() * (6)) + 1);
        total += forRandomMethod;
        document.getElementById("print").innerHTML += forRandomMethod + "   ";
        restulImages("images/dice" + forRandomMethod + ".png", "imag");
    }
    document.getElementById("total").innerHTML = "Total: " + total;
    clearAll("appData");
}
// used image to count your scores
function restulImages(src, id) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 60;
    img.height = 60;
    document.getElementById(id).appendChild(img);
}

function clearAll(name) {
    localStorage.removeItem(name)
}
// choose players 
var local = [];
function manageChoosePlayerPage() {

    document.getElementById("red").addEventListener('click', function () {
        var red = document.getElementById("red");
        red.style.backgroundColor = " rgba(255, 255, 255, .75)";
        red.innerHTML = '<img src="images/wrong.png" width="20" heigth="20"/>';
        red.style.width = "1rem"
        red.style.height = "1rem"
        local.push("Red");
        document.getElementById("numOfPlayer").innerHTML = "Player " + 2; // local.length;
        navigators(local.length, local);
    }, false);

    document.getElementById("blue").onclick = function () {
        var blue = document.getElementById("blue");
        blue.style.backgroundColor = " rgba(255, 255, 255, .75)";
        blue.innerHTML = '<img src="images/wrong.png" width="20" heigth="20"/>';
        blue.style.width = "1rem"
        blue.style.height = "1rem"
        local.push("Blue");
        document.getElementById("numOfPlayer").innerHTML = "Player " + 2; 
        navigators(local.length, local);

    };
    document.getElementById("yellow").onclick = function () {
        var yellow = document.getElementById("yellow");
        yellow.style.backgroundColor = " rgba(255, 255, 255, .75)";
        yellow.innerHTML = '<img src="images/wrong.png" width="20" heigth="20"/>';
        yellow.style.width = "1rem"
        yellow.style.height = "1rem"
        local.push("Yellow");
        document.getElementById("numOfPlayer").innerHTML = "Player " + 2; // local.length;
        navigators(local.length, local);
    };
    document.getElementById("purple").onclick = function () {
        var purple = document.getElementById("purple");
        purple.style.backgroundColor = " rgba(255, 255, 255, .75)";
        purple.innerHTML = '<img src="images/wrong.png" width="20" heigth="20"/>';
        purple.style.width = "1rem"
        purple.style.height = "1rem"
        local.push("Purple");
        document.getElementById("numOfPlayer").innerHTML = "Player " + 2; 
        navigators(local.length, local);
    };
    document.getElementById("green").onclick = function () {
        var green = document.getElementById("green");
        green.style.backgroundColor = " rgba(255, 255, 255, .75)";
        green.innerHTML = '<img src="images/wrong.png" width="20" heigth="20"/>';
        green.style.width = "1rem"
        green.style.height = "1rem"
        local.push("Green");
        document.getElementById("numOfPlayer").innerHTML = "Player " + 2; // local.length;
        navigators(local.length, local);
    };
    document.getElementById("orange").onclick = function () {
        var green = document.getElementById("orange");
        orange.style.backgroundColor = " rgba(255, 255, 255, .75)";
        orange.innerHTML = '<img src="images/wrong.png" width="20" heigth="20"/>';
        orange.style.width = "1rem"
        orange.style.height = "1rem"

        local.push("Orange");
        document.getElementById("numOfPlayer").innerHTML = "Player " + 2; // local.length;
        navigators(local.length, local);

    };

}


function navigators(num, list = []) {
    console.log(list.length);
    if (num == 2) {
        window.location.href = "doublePlay.html";
            localStorage.setItem("data", list[0]);
            localStorage.setItem("data2", list[1]);
    
    }

}

function popThem() {
    var data1 = localStorage.getItem("data");
    var data2 = localStorage.getItem("data2");

    var pl1 = document.getElementById("player1").innerHTML = data1;
    var pl2 = document.getElementById("player3").innerHTML = data2;

    document.getElementById("player1").style.color = data1;
    document.getElementById("player3").style.color = data2;

    var col1 = document.getElementById("playerIm1Div");
    col1.style.backgroundColor = data1;
    col1.style.borderRadius = "70%"
    var col2 = document.getElementById("playerIm2Div");
    col2.style.backgroundColor = data2;
    col2.style.borderRadius = "70%"

    localStorage.setItem("sent1", data1);
    localStorage.setItem("sent2", data2);
}

function resultPresent() {
    var btn1 = document.getElementById("player1R");
    var btn2 = document.getElementById("player3R");

    var data1 = localStorage.getItem("sent1");
    var data2 = localStorage.getItem("sent2");
    ran1 = Math.floor((Math.random() * (6)) + 1);
    ran2 = Math.floor((Math.random() * (6)) + 1);

    btn1.innerHTML = data1;
    restulImages("images/dice" + ran1 + ".png", "resultForPlayer1Im");
    btn2.innerHTML = data2;
    restulImages("images/dice" + ran2 + ".png", "resultForPlayer2Im");

    document.getElementById("player1R").style.color = data1;

    document.getElementById("player3R").style.color = data2;

    localStorage.setItem("k", data1);
    localStorage.setItem("v", ran1);
    localStorage.setItem("k2", data2);
    localStorage.setItem("v2", ran2);

}

function award() {
    var data1 = localStorage.getItem("k");
    var data2 = localStorage.getItem("v");
    var data3 = localStorage.getItem("k2");
    var data4 = localStorage.getItem("v2");

    var red, blue, yellow, purple, green, orange;
    var tot1, tot2, tot3, tot4, tot5, tot6;

    if (data2 > data4) {
        var p1 = document.createElement("p");
        p1.innerHTML = data1 + " wins! ";
        p1.style.color = "white";
        p1.style.fontSize = 30+ "px";
        document.getElementById("topDivAward").style.backgroundColor = data1;
        document.getElementById("divForP").appendChild(p1);
        
    } else if (data2 === data4) {
        var p1 = document.createElement("p");
        p1.innerHTML = "Tie  "
        p1.style.color = "black";
        p1.style.fontSize = 30 + "px";
        document.getElementById("divForP").appendChild(p1);
       
    } else {
        var p1 = document.createElement("p");
        p1.style.transitionDuration = "1s";
        p1.innerHTML = data3 + " wins! ";    
       
        p1.style.color = "white";
        
        document.getElementById('topDivAward').style.backgroundColor = data3;  
        p1.style.fontSize = 30 + "px";
        document.getElementById("divForP").appendChild(p1);
        
    }   
   

    

}

function showMsg() {
    var msg = "Welcome to the Dice Game! <br/>You can play alone or with your friends." +
        "<br/>Each color represents each player.";

    document.getElementById("immidai").innerHTML = msg;
    setTimeout(function () {
        window.location.href = "index1.html";
    }, 4000);
}
