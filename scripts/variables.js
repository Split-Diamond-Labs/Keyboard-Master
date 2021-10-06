let score = 0; // The player score 

let mode = 0; // The mode index 
const modes = ["2 Minute Challenge", "2000 Point Challenge", "Stage By Stage Challenge"]; // Mode names 

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

let word = [];
let typedWord = [];
let wordLength = 0;

let playing = false;

let timer = 0;
let points = 0;
let pointThresh = 0;