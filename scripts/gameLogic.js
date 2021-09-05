// Game Logic
// Logic? What's logic? 

function startGame(mode, keyboard) {
    document.getElementById("startScreen").style.display = "none"; // Close the start screen 
    document.getElementById("mode-display").innerText = modes[mode];
    document.getElementById("keyboard-display").innerText = keyboardNames[keyboard];
    // Will replace this with actual logic once I figure out how it works on paper 
}