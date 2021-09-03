let score = 0;
let mode = 0;
const modes = ["Pointrun", "Speedrun", "Timerun"];
let keyboard = 0;
const keyboards = [
    [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ],
    [
        ['p', 'o', 'i', 'u', 'y', 't', 'r', 'e', 'w', 'q'],
        ['l', 'k', 'j', 'h', 'g', 'f', 'd', 's', 'a'],
        ['m', 'n', 'b', 'v', 'c', 'x', 'z']
    ],
    [
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
        ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's'],
        ['t', 'u', 'v', 'w', 'x', 'y', 'z']
    ]
];
const keyboardNames = ["Normal (QWERTY)", "Reversed (POIUYT)", "Piano (ABCDEF)"];