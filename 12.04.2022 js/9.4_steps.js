const step = num => {
    if (num < 0) return console.log("arg should be positive integer");
    let str = "".padEnd(num)
    for (let i = 0; i < num; i += 1) {
        const symbols = str.slice(0, i)
        const symbol = "#"
        const emptySpaces = str.slice(i, num - 1)
        str = symbols + symbol + emptySpaces
        console.log(str);
    }
}
step(4);

// with 2 loops
function stepShape(num) {
    if (num < 0) return console.log("arg should be positive integer");
    let counter = 0
    const array = new Array(num).fill(' ')
    for (let i = 0; i < num; i += 1) {
        for (let j = 0; j < array.length; j += 1) {
            if (counter === j) {
                array[j] = "#"
                counter += 1
                break;
            }
            continue;
        }
        console.log(array.join().replaceAll(",", ""));
    }
}

stepShape(4)