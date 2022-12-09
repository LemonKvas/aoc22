const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    let res = [];

    arr.forEach((row) => {
        let arrRow = row.split('');

        res.push(arrRow);
    })

    // console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']
    res.pop();
    return res;
}

let lines = syncReadFile('input.txt');

console.log(lines)


// todo check till the edges
function part1(lines) {

    let res = 0;

    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[0].length; j++) {
            if (check(i, j)) {
                res++;
            }
        }
    }
    return res;
}

function check(i, j) {

    if (i == 0 || j == 0 || i == lines.length - 1 || j == lines[0].length - 1) {
        return true;
    } else {
        let cell = Number(lines[i][j]);

//    top
        let topMax = 0;
        for (let ix = i - 1; ix >= 0; ix--) {
            if (Number(lines[ix][j]) > topMax) {
                topMax = Number(lines[ix][j]);
            }
        }
        if (cell > topMax) {
            return true;
        }
//    left
        let leftMax = 0;

        for (let jx = j - 1; jx >= 0; jx--) {
            if (Number(lines[i][jx]) > leftMax) {
                leftMax = Number(lines[i][jx]);
            }
        }
        if (cell > leftMax) {
            return true;
        }
//    right
        let rightMax = 0;
        for (let jx = j + 1; jx < lines[0].length; jx++) {
            if (Number(lines[i][jx]) > rightMax) {
                rightMax = Number(lines[i][jx]);
            }
        }
        if (cell > rightMax) {
            return true;
        }
//    bot
        let botMax = 0;
        for (let ix = i + 1; ix < lines[0].length; ix++) {
            if (Number(lines[ix][j]) > botMax) {
                botMax = Number(lines[ix][j]);
            }
        }

        if (cell > botMax) {
            return true;
        }

        return false;
    }
}


console.log('Part 1');
console.log(part1(lines));

function part2(lines) {
    let res = 0;

    for (let i = 1; i < lines.length; i++) {
        for (let j = 1; j < lines[0].length; j++) {
            let score = beauty(i, j);
            if (score > res) {
                res = score;
            }
        }
    }
    return res;
}

function beauty(i, j) {
    let cell = Number(lines[i][j]);

//    top
    let topScore = 1;
    for (let ix = i - 1; ix > 0; ix--) {
        let checker = Number(lines[ix][j]);
        if (cell > checker) {
            topScore++;
        } else {
            break;
        }
    }

//    left
    let leftScore = 1;

    for (let jx = j - 1; jx > 0; jx--) {
        let checker = Number(lines[i][jx]);
        if (cell > checker) {
            leftScore++;
        } else {
            break;
        }
    }

//    right
    let rightScore = 1;
    for (let jx = j + 1; jx < lines[0].length - 1; jx++) {
        let checker = Number(lines[i][jx]);
        if (cell > checker) {
            rightScore++;
        } else {
            break;
        }
    }

//    bot
    let botScore = 1;
    for (let ix = i + 1; ix < lines[0].length - 1; ix++) {
        let checker = Number(lines[ix][j]);
        if (cell > checker) {
            botScore++;
        } else {
            break;
        }
    }

    return topScore * rightScore * leftScore * botScore;

}

console.log('Part 2');
console.log(part2(lines));
