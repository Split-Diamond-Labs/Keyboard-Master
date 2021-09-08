/**
 * eventHandlers.js 
 * 
 * This file is where all the event handlers are attached to the events 
 */

function arrayEquality(arr1, arr2) {

    // Check if the arrays are the same length
    if (arr1.length !== arr2.length) return false;

    // Check if all items exist and are in the same order
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    // Otherwise, return true
    return true;

};

function modeClick() {
    mode++; // Toggle mode 
    mode %= modes.length; // If the mode index overflows, this line will automatically bring it back to 0
    document.getElementById("mode").innerText = modes[mode]; // Update the button 
}


function keyboardClick() {
    keyboard++;
    // Toggle key... you know what? if you just read the comments in the previous function you would understand this already. 
    keyboard %= keyboards.length;
    document.getElementById("keyboard-type").innerText = keyboardNames[keyboard];
    switch (keyboard) {
        case 0: // Normal Keyboard 
            document.getElementById("keyboard-preview").innerHTML = `<h1>Preview:</h1>
            <div>
                <button>Q</button>
                <button>W</button>
                <button>E</button>
                <button>R</button>
                <button>T</button>
                <button>Y</button>
                <button>U</button>
                <button>I</button>
                <button>O</button>
                <button>P</button>
            </div>
            <br>
            <div>
                <button>A</button>
                <button>S</button>
                <button>D</button>
                <button>F</button>
                <button>G</button>
                <button>H</button>
                <button>J</button>
                <button>K</button>
                <button>L</button>
                <span style="color: #525252;">d</span>
            </div>
            <br>
            <div>
                <button>Z</button>
                <button>X</button>
                <button>C</button>
                <button>V</button>
                <button>B</button>
                <button>N</button>
                <button>M</button>
                <span style="color: #525252;">ddddd</span>
            </div>`;
            break;
        case 1: // Reversed Keyboard 
            document.getElementById("keyboard-preview").innerHTML = `<h1>Preview:</h1>
        <div>
            <button>P</button>
            <button>O</button>
            <button>I</button>
            <button>U</button>
            <button>Y</button>
            <button>T</button>
            <button>R</button>
            <button>E</button>
            <button>W</button>
            <button>Q</button>
        </div>
        <br>
        <div>
            <button>L</button>
            <button>K</button>
            <button>J</button>
            <button>H</button>
            <button>G</button>
            <button>F</button>
            <button>D</button>
            <button>S</button>
            <button>A</button>
            <span style="color: #525252;">d</span>
        </div>
        <br>
        <div>
            <button>M</button>
            <button>N</button>
            <button>B</button>
            <button>V</button>
            <button>C</button>
            <button>X</button>
            <button>Z</button>
            <span style="color: #525252;">ddddd</span>
        </div>`;
            break;

        case 2: // Piano Keyboard 
            document.getElementById("keyboard-preview").innerHTML = `<h1>Preview:</h1>
        <div>
            <button>A</button>
            <button>B</button>
            <button>C</button>
            <button>D</button>
            <button>E</button>
            <button>F</button>
            <button>G</button>
            <button>H</button>
            <button>I</button>
            <button>J</button>
        </div>
        <br>
        <div>
            <button>K</button>
            <button>L</button>
            <button>M</button>
            <button>N</button>
            <button>O</button>
            <button>P</button>
            <button>Q</button>
            <button>R</button>
            <button>S</button>
            <span style="color: #525252;">d</span>
        </div>
        <br>
        <div>
            <button>T</button>
            <button>U</button>
            <button>V</button>
            <button>W</button>
            <button>X</button>
            <button>Y</button>
            <button>Z</button>
            <span style="color: #525252;">ddddd</span>
        </div>`;
            break;
    }
}

function keyboardConvert(char) {
    if (("qwertyuiop").includes(char)) {
        return keyboards[keyboard][0]['qwertyuiop'.indexOf(char)];
    } else if (("asdfghjkl").includes(char)) {
        return keyboards[keyboard][1]['asdfghjkl'.indexOf(char)];
    } else if (("zxcvbnm").includes(char)) {
        return keyboards[keyboard][2]['zxcvbnm'.indexOf(char)];
    }
}

function onType(e) {
    if (!playing) return;
    if (("abcdefghijklmnopqrstuvwxyz").includes(e.key.toLowerCase())) {
        typedWord.push(keyboardConvert(e.key.toLowerCase()));
    } else if (e.key === "Backspace") {
        typedWord.pop();
    }
    if (arrayEquality(typedWord, word)) {
        typedWord = [];
        points += wordLength * 10;
        switch (mode) {
            case 0:
                document.getElementById("scoreAmount").innerText = String(points);
                break;
            case 1, 2:
                document.getElementById("thresholdAmount").innerText = String(points);
                break;
        }
        generateWord();
    }
    (function() {
        let typedWordString = "";
        typedWord.forEach(function(value, index, array) { typedWordString += value; });
        document.getElementById("typed-word").innerText = typedWordString;
    })(); // To limit variable scope 

}

document.getElementById("mode").addEventListener("click", modeClick); // Attach 
document.getElementById("keyboard-type").addEventListener("click", keyboardClick);
document.getElementById("start").addEventListener("click", function() { startGame(mode, keyboard); /* Defined in gameLogic.js */ });
document.addEventListener("keydown", onType);