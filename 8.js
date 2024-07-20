const readline = require('readline');

//?  Create an interface for reading input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//? Function to print the inverted centered pyramid
function printInvertedCenteredPyramid(rows) {
    for (let i = rows; i >= 1; i--) {
        let spaces = ' '.repeat(rows - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars + spaces);
    }
}

//? Prompt the user for the number of rows
rl.question("Enter number of rows: ", (input) => {
    const rows = parseInt(input, 10);

    //TODO Validate the input
    if (!isNaN(rows) && rows > 0) {
        printInvertedCenteredPyramid(rows);
    } else {
        console.log("Please enter a valid positive number.");
    }

    //TODO Close the readline interface
    rl.close();
});
