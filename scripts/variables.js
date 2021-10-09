let url = new URL(window.location.href); // URL

let score = 0; // The player score 

let mode = url.searchParams.get("mode") ? JSON.parse(url.searchParams.get("mode")) : 0; // The mode index 
const modes = ["2 Minute Challenge", "2000 Point Challenge", "Stage By Stage Challenge"]; // Mode names 

document.getElementById("mode").innerText = modes[mode]; // Set the button text, just in case

let keyboard = 0; // Keyboard Index 
const keyboards = [
    // Normal Keyboard 
    [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ],

    // Reversed Keyboard 
    [
        ['p', 'o', 'i', 'u', 'y', 't', 'r', 'e', 'w', 'q'],
        ['l', 'k', 'j', 'h', 'g', 'f', 'd', 's', 'a'],
        ['m', 'n', 'b', 'v', 'c', 'x', 'z']
    ],

    // Piano Keyboard
    [
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
        ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's'],
        ['t', 'u', 'v', 'w', 'x', 'y', 'z']
    ]
];
const keyboardNames = ["Normal", "Reversed", "Piano"]; // Keyboard Names

let word = []; // Word as a character array 
let typedWord = []; // Currently typed word 
let wordLength = 0; // Length of word, for scoring 

let playing = false; // Determines whether certain events fire 

let timerLength = url.searchParams.get("time") ? JSON.parse(url.searchParams.get("time")) : 1200; // Check if URL query exists 
let skipLength = url.searchParams.get("pointGoal") ? JSON.parse(url.searchParams.get("pointGoal")) : 0;
let stageLength = url.searchParams.get("stageTime") ? JSON.parse(url.searchParams.get("stageTime")) : 300; // Default variable value 

let timer = timerLength;
let points = 0; // Points 
let pointThresh = skipLength; // Threshold