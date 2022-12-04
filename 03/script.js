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
    lines.forEach((lines) => {
        const arr = lines.split('');
        const mid = (arr.length / 2);
        const l = arr.slice(0, mid);
        const r = arr.slice(mid);

        const duplicate = getDuplicate(l, r);

        const prio = getPrio(duplicate);

        res += prio;

    })

    return res;
}

function getDuplicate(l, r) {
    const dic = new Set();

    for (const char of l) {
        dic.add(char);
    }

    for (const char of r) {
        if (dic.has(char)) {
            return char;
        }
    }
}

function getPrio(c) {
    if (c.toLowerCase() == c) {
        return c.charCodeAt(0) - 96;
    } else {
        return c.charCodeAt(0) - 38;
    }
}

console.log('Part 1');
console.log(part1(lines));

function part2(lines) {
    let res = 0;
    for (let i = 2; i < lines.length; i += 3) {
        const l1 = lines[i - 2];
        const l2 = lines[i - 1];
        const l3 = lines[i];

        const key = getKey(l1, l2, l3);

        const prio = getPrio(key);
        res += prio;
    }

    return res;
}

function getKey(l1, l2, l3) {
    const dic = new Set();

    for (const char of l1) {
        dic.add(char);
    }

    const dic2 = new Set();
    for (const char of l2) {
        if (dic.has(char)) {
            dic2.add(char);
        }
    }

    for (const char of l3) {
        if (dic2.has(char)) {
            return char;
        }
    }
}

console.log('Part 2');
console.log(part2(lines));