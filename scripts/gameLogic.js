function startGame(mode, keyboard) {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("mode-display").innerText = modes[mode];
    document.getElementById("keyboard-display").innerText = keyboardNames[keyboard];
}