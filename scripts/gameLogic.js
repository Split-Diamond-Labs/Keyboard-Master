// Game Logic
// Logic? What's logic? 

function startGame(mode, keyboard) {
    playing = true;
    document.getElementById("startScreen").style.display = "none"; // Close the start screen 
    document.getElementById("mode-display").innerText = modes[mode];
    document.getElementById("keyboard-display").innerText = keyboardNames[keyboard];
    switch (mode) {
        case 0: // Pointrun 
            document.getElementById("score").innerHTML = "Points: <b><span id='scoreAmount'>0</span></b>";
            document.getElementById("threshold").innerHTML = "Time left: <b><span id='thresholdAmount'>2:00.0</span></b>";
            pointrun();
            break;
        case 1: // Speedrun 
            document.getElementById("score").innerHTML = "Time: <b><span id='scoreAmount'>0:00.00</span></b>";
            document.getElementById("threshold").innerHTML = "<b><span id='thresholdAmount'>0</span>/100</b> Points reached";
            speedrun();
            break;
        case 2: // Timerun 
            document.getElementById("score").innerHTML = "Time: <b><span id='scoreAmount'>0.00</span></b>";
            document.getElementById("threshold").innerHTML = "Points: <b><span id='thresholdAmount'>0</span>/<span id='point-threshold'>0</span></b> to stay alive";
            timerun();
            break;
    }

    generateWord();
    // Will replace this with actual logic once I figure out how it works on paper 
}

function pointrun() {
    timer = 1200;
    let timerInterval = setInterval(function() {
        timer--;
        document.getElementById("thresholdAmount").innerText = formatTime(timer);
        if (timer == 0) {
            clearInterval(timerInterval);
            document.getElementById("word").innerText = "Time's up! Reload to replay!";
            document.getElementById("typed-word").innerText = `Score: ${points}`;
            playing = false;
        }
    }, 100);

}

function speedrun() {
    timer = 0;
    let timerInterval = setInterval(function() {
        timer++;
        document.getElementById("scoreAmount").innerText = formatTime(timer);
    }, 100);
}

function timerun() {

}

function formatTime(num) {
    let secs, tenths = "";
    if (num % 10 == 0) {
        tenths = "0";
    } else {
        tenths = String(num % 10);
    }
    if (Math.floor(num % 600 / 10) < 10) {
        secs = "0" + String(Math.floor(num % 600 / 10));
    } else {
        secs = String(Math.floor(num % 600 / 10));
    }
    return `${Math.floor(timer/600)}:${secs}.${tenths}`;
}

function generateWord() {
    wordLength = 5 + Math.floor(Math.random() * 6);
    word = [];
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < wordLength; i++) {
        word.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    (function() {
        let wordString = "";
        word.forEach(function(value, index, array) { wordString += value; });
        document.getElementById("word").innerText = wordString;
    })();
}