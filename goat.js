const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N;
let K;

let goats = [];

rl.on('line', function (input) {
    if (!N || !K) {
        [N, K] = input.split(' ');
        return
    }
    goats = input.split(' ').map(e => Number(e));
    rl.close();

    goats = goats.sort(function (a, b) { return b - a });
    let capacity = goats[0];

    while (true) {
        let raftCourses = 0;
        curr_goats = goats.slice();
        while (curr_goats.length > 0) {
            let curr_cap = capacity;
            for (let i = 0; i < curr_goats.length; i++) {
                if (curr_goats[i] <= curr_cap) {
                    curr_cap -= curr_goats.splice(i, 1);;
                    i--;
                }
            }
            raftCourses++;
        }
        if (raftCourses > K) {
            capacity++;
        } else {
            console.log(capacity);
            break;
        }
    }
});