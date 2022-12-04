const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    // console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

    return arr;
}
let lines = syncReadFile('input.txt');

// console.log(lines)

function part1 (lines) {
    let score = 0;
    let curSum;
    lines.forEach((line) => {
        let [opponent, my] = line.split(" ");
        if (my == "X") {
            curSum = 1;
        }
        if (my == "Y") {
            curSum = 2;
        }
        if (my == "Z") {
            curSum = 3;
        }

        curSum += checkWin(opponent, my);

        score += curSum;
    })

    return score;
}

const winMap = new Map();
winMap.set('X', 'C');
winMap.set('Y', 'A');
winMap.set('Z', 'B');

const drawMap = new Map();
drawMap.set('X', 'A');
drawMap.set('Y', 'B');
drawMap.set('Z', 'C');

function checkWin (op, my) {
    if (drawMap.get(my) == op) {
        return 3;
    }

    // win
    if (winMap.get(my) == op) {
        return 6;
    }

    // lose
    return 0;
}

console.log('Part 1');
console.log(part1(lines));

function part2(lines) {
    let score = 0;
    let curSum;
    lines.forEach((line) => {
        let [opponent, my] = line.split(" ");
        if (my == "X") {
            curSum = 0;
        }
        if (my == "Y") {
            curSum = 3;
        }
        if (my == "Z") {
            curSum = 6;
        }

        curSum += checkShape(opponent, my);

        score += curSum;
    })

    return score;
}

let pointMap = new Map();

pointMap.set('A', 1);
pointMap.set('B', 2);
pointMap.set('C', 3);


let loseMap = new Map();

loseMap.set('A', 'C');
loseMap.set('B', 'A');
loseMap.set('C', 'B');

let winMap2 = new Map();

winMap2.set('A', 'B');
winMap2.set('B', 'C');
winMap2.set('C', 'A');



function checkShape(op, my) {
    // draw
    if (my == 'Y') {
        return pointMap.get(op);
    }
    // lose
    if (my == 'X') {
        return pointMap.get(loseMap.get(op));
    }
    // win
    if (my == 'Z') {
        return pointMap.get(winMap2.get(op))
    }

}


console.log('Part 2');
console.log(part2(lines));