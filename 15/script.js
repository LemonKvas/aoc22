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

function part1(lines) {

}

console.log('Part 1');
console.log(part1(lines));

function part2(lines) {

}


console.log('Part 2');
console.log(part2(lines));