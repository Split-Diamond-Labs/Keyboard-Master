function modeClick() {
    mode++;
    mode %= modes.length;
    document.getElementById("mode").innerText = modes[mode];
}

document.getElementById("mode").addEventListener("click", modeClick);

function keyboardClick() {
    keyboard++;
    keyboard %= keyboards.length;
    document.getElementById("keyboard-type").innerText = keyboardNames[keyboard];
}
document.getElementById("keyboard-type").addEventListener("click", keyboardClick);

document.getElementById("start").addEventListener("click", function() { startGame(mode, keyboard) });