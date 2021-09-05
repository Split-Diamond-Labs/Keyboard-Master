// Game Logic
// Logic? What's logic? 

function startGame(mode, keyboard) {
    document.getElementById("startScreen").style.display = "none"; // Close the start screen 
    document.getElementById("mode-display").innerText = modes[mode];
    document.getElementById("keyboard-display").innerText = keyboardNames[keyboard];
    switch (mode) {
        case 0: // Pointrun 
            document.getElementById("score").innerHTML = "Points: <b><span id='scoreAmount'>0</span></b>";
            document.getElementById("threshold").innerHTML = "Time left: <b><span id='thresholdAmount'>2:00</span></b>";
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
    // Will replace this with actual logic once I figure out how it works on paper 
}

function pointrun() {

}

function speedrun() {

}

function timerun() {

}