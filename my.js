let player = 1;
let won = false;

function play() {
    document.getElementById("secondScreen").style.display = "block";
    document.getElementById("firstScreen").style.display = "none";
    document.body.style.backgroundImage = "none";
    let html = "";
    for(let i = 0; i < 5; i++) {
        html += '<tr>';
        for(let j = 0; j < 5; j++) {
            html += '<td id="'+i+'-'+j+'" onclick="change(this)">';
            html += "</td>";
        }
        html += '</tr>';
    }
    document.getElementById('content').innerHTML = html;
}

function change(element) {
    if(!element.innerHTML) {
        if(player == 1) {
            element.innerHTML = "X";
            player = 2;
            checkWin();
        } else {
            element.innerHTML = "O";
            player = 1;
            checkWin();
        }
    }
}

function checkWin() {
    // check hang ngang
    for(let i=0;i<5;i++){
        howToWin(document.getElementById(i +"-0").innerText,
        document.getElementById(i + "-1").innerText,
        document.getElementById(i + "-2").innerText,
        document.getElementById(i + "-3").innerText,
        document.getElementById(i + "-4").innerText);
    }
    // check hang doc
    for(let i=0;i<5;i++){
        howToWin(document.getElementById("0-"+i).innerText,
        document.getElementById("1-"+i).innerText,
        document.getElementById("2-"+i).innerText,
        document.getElementById("3-"+i).innerText,
        document.getElementById("4-"+i).innerText);
    }
    // check cheo trai
    howToWin(document.getElementById("0-0").innerText,
    document.getElementById("1-1").innerText,
    document.getElementById("2-2").innerText,
    document.getElementById("3-3").innerText,
    document.getElementById("4-4").innerText);
    //check cheo phai
    howToWin(document.getElementById("0-4").innerText,
    document.getElementById("1-3").innerText,
    document.getElementById("2-2").innerText,
    document.getElementById("3-1").innerText,
    document.getElementById("4-0").innerText);
}

function howToWin(first, second, third,fourth,fifth) {
    if(first != "" && first == second && first == third && first == fourth && first == fifth) {
    if(first=="X"){
        alert("Player 1 winner!");
    }else{
        alert("Player 2 winner!");
    }
    won = true;
    }
}

function playAgain(){
    play();
}
