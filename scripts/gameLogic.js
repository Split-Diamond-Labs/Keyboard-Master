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
            document.getElementById("threshold").innerHTML = "<b><span id='thresholdAmount'>0</span>/2000</b> Points reached";
            speedrun();
            break;
        case 2: // Timerun 
            document.getElementById("score").innerHTML = "Time: <b><span id='scoreAmount'>0.00</span></b>";
            document.getElementById("threshold").innerHTML = "You need <b><span id='thresholdAmount'>0</span>/<span id='point-threshold'>0</span></b> points to stay alive at <span id='timeThresh'>0:30.0</span>";
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
    pointThresh = 2000;
    let timerInterval = setInterval(function() {
        timer++;
        document.getElementById("scoreAmount").innerText = formatTime(timer);
    }, 100);
    let foreverCheckingInterval = setInterval(function() {
        if (points >= pointThresh) {
            clearInterval(timerInterval);
            clearInterval(foreverCheckingInterval);
            document.getElementById("word").innerText = "You won! Reload to replay!";
            document.getElementById("typed-word").innerText = `Time: ${formatTime(timer)}`;
            playing = false;
        }
    }, 1);
}

function timerun() {
    // This is going to be hard isn't it 
    pointThresh = 0;
    timer = 0;
    let stage = 1;
    document.getElementById("point-threshold").innerText = String(pointThresh + 100 * (stage + 1));
    // If I don't make it through, c-continue m-my work p-p-please 
    /* 
    So the format of this is that every some sort of time interval, 
    the point thresh rises. If, when the point thresh rises, the 
    player has not gotten his points above or equal to the thresh, 
    they lose. The goal is to last as long as possible. 
    */
    let timerInterval = setInterval(function() {
        timer++;
        document.getElementById("scoreAmount").innerText = formatTime(timer);
        if (timer % 300 == 0) { // Every 30 seconds 
            stage++;
            document.getElementById("timeThresh").innerText = formatTime(300 * stage);
            pointThresh += 100 * stage;
            document.getElementById("point-threshold").innerText = String(pointThresh + 100 * (stage + 1));
            if (points < pointThresh) {
                playing = false;
                clearInterval(timerInterval);
                document.getElementById("word").innerText = "You lost! Reload to replay!";
                document.getElementById("typed-word").innerText = `Time: ${formatTime(timer)}`;
            }
        }
    }, 100);
}

function formatTime(num) {
    let secs, tenths, mins = "";
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
    mins = String((num - num % 600) / 600);

    return `${mins}:${secs}.${tenths}`;
}

function generateWord() {
    wordLength = 5 + Math.floor(Math.random() * 6);
    word = [];
    var charactersLength = letters.length;
    for (var i = 0; i < wordLength; i++) {
        word.push(letters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    (function() {
        let wordString = "";
        word.forEach(function(value, index, array) { wordString += value; });
        document.getElementById("word").innerText = wordString;
    })();
}