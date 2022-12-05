const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    // console.log(arr); // 👉️ ''One', 'Two', 'Three', 'Four''

    return arr;
}

let lines = syncReadFile('input.txt');
// console.log(lines)

let stacks = [
    [''],
    ['D', 'L', 'V', 'T', 'M', 'H', 'F'],
    ['H', 'Q', 'G', 'J', 'C', 'T', 'N', 'P'],
    ['R', 'S', 'D', 'M', 'P', 'H'],
    ['L', 'B', 'V', 'F'],
    ['N', 'H', 'G', 'L', 'Q'],
    ['W', 'B', 'D', 'G', 'R', 'M', 'P'],
    ['G', 'M', 'N', 'R', 'C', 'H', 'L', 'Q'],
    ['C', 'L', 'W'],
    ['R', 'D', 'L', 'Q', 'J', 'Z', 'M', 'T'],
];

let stacks2 = [
    [''],
    ['D', 'L', 'V', 'T', 'M', 'H', 'F'],
    ['H', 'Q', 'G', 'J', 'C', 'T', 'N', 'P'],
    ['R', 'S', 'D', 'M', 'P', 'H'],
    ['L', 'B', 'V', 'F'],
    ['N', 'H', 'G', 'L', 'Q'],
    ['W', 'B', 'D', 'G', 'R', 'M', 'P'],
    ['G', 'M', 'N', 'R', 'C', 'H', 'L', 'Q'],
    ['C', 'L', 'W'],
    ['R', 'D', 'L', 'Q', 'J', 'Z', 'M', 'T'],
];


function part1(lines, stacks) {

    lines.forEach((line) => {
        //    formatting
        const arr = line.split(" ");
        const move = arr[1];
        const from = arr[3];
        const to = arr[5]

        for (let i = 0; i < move; i++) {
            const crate = stacks[from].pop();

            stacks[to].push(crate);
        }

    })

    stacks.forEach((crate) => {
        console.log(crate[crate.length - 1]);
    })

}

console.log('Part 1');
part1(lines, stacks);

function part2(lines, stacks2) {

    lines.forEach((line) => {
        //    formatting
        const arr = line.split(" ");
        const move = arr[1];
        const from = arr[3];
        const to = arr[5]

        let block = [];

        for (let i = 0; i < move; i++) {
            const crate = stacks2[from].pop();
            block.push(crate);
        }

        let length = block.length;
        for (let i = 0; i < length; i++) {
            const crate = block.pop();
            stacks2[to].push(crate);
        }

    })

    stacks2.forEach((crate) => {
        console.log(crate[crate.length - 1]);
    })
}


console.log('Part 2');
console.log(part2(lines, stacks2));
