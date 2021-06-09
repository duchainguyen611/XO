let player = 1;
let won = false;

function play() {
    document.getElementById("secondScreen").style.display = "block";
    document.getElementById("firstScreen").style.display = "none";
    document.body.style.backgroundImage = "none";
    let html = "";
    for(let i = 0; i < 10; i++) {
        html += '<tr>';
        for(let j = 0; j < 10; j++) {
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
    for(let i=0;i<10;i++){
        howToWin(document.getElementById(i +"-0").innerText,
        document.getElementById(i + "-1").innerText,
        document.getElementById(i + "-2").innerText,
        document.getElementById(i + "-3").innerText,
        document.getElementById(i + "-4").innerText);
        howToWin(document.getElementById(i +"-1").innerText,
        document.getElementById(i + "-2").innerText,
        document.getElementById(i + "-3").innerText,
        document.getElementById(i + "-4").innerText,
        document.getElementById(i + "-5").innerText);
        howToWin(document.getElementById(i +"-2").innerText,
        document.getElementById(i + "-3").innerText,
        document.getElementById(i + "-4").innerText,
        document.getElementById(i + "-5").innerText,
        document.getElementById(i + "-6").innerText);
        howToWin(document.getElementById(i +"-3").innerText,
        document.getElementById(i + "-4").innerText,
        document.getElementById(i + "-5").innerText,
        document.getElementById(i + "-6").innerText,
        document.getElementById(i + "-7").innerText);
        howToWin(document.getElementById(i +"-4").innerText,
        document.getElementById(i + "-5").innerText,
        document.getElementById(i + "-6").innerText,
        document.getElementById(i + "-7").innerText,
        document.getElementById(i + "-8").innerText);
        howToWin(document.getElementById(i +"-5").innerText,
        document.getElementById(i + "-6").innerText,
        document.getElementById(i + "-7").innerText,
        document.getElementById(i + "-8").innerText,
        document.getElementById(i + "-9").innerText);
    }
    // check hang doc
    for(let i=0;i<10;i++){
        howToWin(document.getElementById("0-"+i).innerText,
        document.getElementById("1-"+i).innerText,
        document.getElementById("2-"+i).innerText,
        document.getElementById("3-"+i).innerText,
        document.getElementById("4-"+i).innerText);
        howToWin(document.getElementById("1-"+i).innerText,
        document.getElementById("2-"+i).innerText,
        document.getElementById("3-"+i).innerText,
        document.getElementById("4-"+i).innerText,
        document.getElementById("5-"+i).innerText);
        howToWin(document.getElementById("2-"+i).innerText,
        document.getElementById("3-"+i).innerText,
        document.getElementById("4-"+i).innerText,
        document.getElementById("5-"+i).innerText,
        document.getElementById("6-"+i).innerText);
        howToWin(document.getElementById("3-"+i).innerText,
        document.getElementById("4-"+i).innerText,
        document.getElementById("5-"+i).innerText,
        document.getElementById("6-"+i).innerText,
        document.getElementById("7-"+i).innerText);
        howToWin(document.getElementById("4-"+i).innerText,
        document.getElementById("5-"+i).innerText,
        document.getElementById("6-"+i).innerText,
        document.getElementById("7-"+i).innerText,
        document.getElementById("8-"+i).innerText);
        howToWin(document.getElementById("5-"+i).innerText,
        document.getElementById("6-"+i).innerText,
        document.getElementById("7-"+i).innerText,
        document.getElementById("8-"+i).innerText,
        document.getElementById("9-"+i).innerText);
    }
    // check cheo trai
    howToWin(document.getElementById("0-0").innerText,
    document.getElementById("1-1").innerText,
    document.getElementById("2-2").innerText,
    document.getElementById("3-3").innerText,
    document.getElementById("4-4").innerText);
    howToWin(document.getElementById("1-1").innerText,
    document.getElementById("2-2").innerText,
    document.getElementById("3-3").innerText,
    document.getElementById("4-4").innerText,
    document.getElementById("5-5").innerText);
    howToWin(document.getElementById("2-2").innerText,
    document.getElementById("3-3").innerText,
    document.getElementById("4-4").innerText,
    document.getElementById("5-5").innerText,
    document.getElementById("6-6").innerText);
    howToWin(document.getElementById("3-3").innerText,
    document.getElementById("4-4").innerText,
    document.getElementById("5-5").innerText,
    document.getElementById("6-6").innerText,
    document.getElementById("7-7").innerText);
    howToWin(document.getElementById("4-4").innerText,
    document.getElementById("5-5").innerText,
    document.getElementById("6-6").innerText,
    document.getElementById("7-7").innerText,
    document.getElementById("8-8").innerText);
    howToWin(document.getElementById("5-5").innerText,
    document.getElementById("6-6").innerText,
    document.getElementById("7-7").innerText,
    document.getElementById("8-8").innerText,
    document.getElementById("9-9").innerText); 
    //check cheo phai
    howToWin(document.getElementById("0-9").innerText,
    document.getElementById("1-8").innerText,
    document.getElementById("2-7").innerText,
    document.getElementById("3-6").innerText,
    document.getElementById("4-5").innerText);
    howToWin(document.getElementById("1-8").innerText,
    document.getElementById("2-7").innerText,
    document.getElementById("3-6").innerText,
    document.getElementById("4-5").innerText,
    document.getElementById("5-4").innerText);
    howToWin(document.getElementById("2-7").innerText,
    document.getElementById("3-6").innerText,
    document.getElementById("4-5").innerText,
    document.getElementById("5-4").innerText,
    document.getElementById("6-3").innerText);
    howToWin(document.getElementById("3-6").innerText,
    document.getElementById("4-5").innerText,
    document.getElementById("5-4").innerText,
    document.getElementById("6-3").innerText,
    document.getElementById("7-2").innerText);
    howToWin(document.getElementById("4-5").innerText,
    document.getElementById("5-4").innerText,
    document.getElementById("6-3").innerText,
    document.getElementById("7-2").innerText,
    document.getElementById("8-1").innerText);
    howToWin(document.getElementById("5-4").innerText,
    document.getElementById("6-3").innerText,
    document.getElementById("7-2").innerText,
    document.getElementById("8-1").innerText,
    document.getElementById("9-0").innerText); 
}

function howToWin(first, second, third,fourth,fifth) {
    if(first != "" && first == second && first == third && first == fourth && first == fifth) {
      alert("Winner!");
      won = true;
    }
}

function playAgain(){
    play();
}