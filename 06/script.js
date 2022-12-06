const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    // const arr = contents.split(/\r?\n/);

    // console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

    return contents;
}

let lines = syncReadFile('input.txt');

// console.log(lines)

function part1(lines) {

    const arr = lines.split('');

    let quad = [arr[0], arr[1], arr[2], arr[3]];
    if (checkForDuplicate(quad)) {
        return 4;
    }

    for (let i = 4; i < arr.length; i++) {
        let check = arr[i];

        quad.shift();
        quad.push(check);

        if (checkForDuplicate(quad)) {
            return i + 1;
        }
    }
}

function checkForDuplicate(arr) {
    let set = new Set();
    arr.forEach((item) => {
        // if (set.has(item)) {
        //     return false;
        // }
        set.add(item)
    })

    if (set.size != arr.length) {
        return false
    } else {
        return true
    }
}

console.log('Part 1');
console.log(part1(lines));

function part2(lines) {

    const arr = lines.split('');

    let quad = [];

    for (let i = 0; i < 14; i++) {
        quad.push(arr[i]);
    }
    if (checkForDuplicate(quad)) {
        return 14;
    }

    for (let i = 14; i < arr.length; i++) {
        let check = arr[i];

        quad.shift();
        quad.push(check);

        if (checkForDuplicate(quad)) {
            return i + 1;
        }
    }

}


console.log('Part 2');
console.log(part2(lines));
