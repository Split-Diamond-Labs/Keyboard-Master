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

let timerInterval;

function pointrun() {
    timer = 1200;
    timerInterval = setInterval(function() {
        timer--;
        document.getElementById("thresholdAmount").innerText = formatTime(timer);
        if (timer == 0) {
            clearInterval(timerInterval);
            document.getElementById("word").innerText = "Time's up! Press space to replay!";
            document.getElementById("typed-word").innerText = `Score: ${points}`;
            playing = false;
        }
    }, 100);

}

function speedrun() {
    timer = 0;
    pointThresh = 2000;
    timerInterval = setInterval(function() {
        timer++;
        document.getElementById("scoreAmount").innerText = formatTime(timer);
    }, 100);
    let foreverCheckingInterval = setInterval(function() {
        if (points >= pointThresh) {
            clearInterval(timerInterval);
            clearInterval(foreverCheckingInterval);
            document.getElementById("word").innerText = "You won! Press space to replay!";
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
    timerInterval = setInterval(function() {
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
                document.getElementById("word").innerText = "You lost! Press space to replay!";
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
    const wordChoice = words.split("\n")[Math.floor(Math.random() * words.split("\n").length)].trim().toLowerCase().replace(/\W/g, "");
    wordLength = wordChoice.length;
    word = wordChoice.split("");
    document.getElementById("word").innerText = wordChoice;
}

function restart() {
    score = 0;

    word = [];
    typedWord = [];
    wordLength = 0;

    playing = false;

    timer = 0;
    points = 0;
    pointThresh = 0;

    if (timerInterval) {
        clearInterval(timerInterval);
    }

    document.getElementById("startScreen").style.display = "block";
    document.getElementById("restart").innerHTML = `<h1 style="margin: 0% auto; text-align: center;">
    Mode:
    <span id="mode-display">[Placeholder Text]</span>
    <span style="color: #4d4d4d; font-size: 30%;">[Placeholder Text]</span> Keyboard:
    <span id="keyboard-display">[Placeholder Text]</span>
</h1>
<p id="score" style="padding-left: 5%; font-size: 150%;">[Placeholder Text]</p>
<p id="threshold" style="padding-left: 5%; font-size: 150%;">[Placeholder Text]</p>
<p id="word" style="width: 100%; text-align: center; font-size: 400%;">Word</p>
<p style="width: 100%; height:fit-content; overflow-wrap: break-word; text-align: center; font-size: 400%; color: #80ff00;"><span id="typed-word"></span><span class="blinking">_</span></p>`;
}