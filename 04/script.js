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
    let res = 0;
    lines.forEach((line) => {
        const arr = line.split(',');
        const firstArr = arr[0].split('-');
        const secondArr = arr[1].split('-');

        const l1 = Number(firstArr[0]);
        const r1 = Number(firstArr[1]);

        const l2 = Number(secondArr[0]);
        const r2 = Number(secondArr[1]);

        if ((l1 <= l2 && r1 >= r2) || (l2 <= l1 && r2 >= r1)) {
            res++;
        }
    })

    return res;
}

console.log('Part 1');
console.log(part1(lines));

function part2(lines) {
    let res = 0;
    lines.forEach((line) => {
        const arr = line.split(',');
        const firstArr = arr[0].split('-');
        const secondArr = arr[1].split('-');

        const l1 = Number(firstArr[0]);
        const r1 = Number(firstArr[1]);

        const l2 = Number(secondArr[0]);
        const r2 = Number(secondArr[1]);

        if ((l1 == l2) || (r1 == r2) || (l1 <= l2 && r1>= l2) || (l1 <= r2 && r1 >= r2) || (l2 <= l1 && r2>= l1) || (l2 <= r1 && r2 >= r1) ) {
            res++;
        }
    })

    return res;
}


console.log('Part 2');
console.log(part2(lines));