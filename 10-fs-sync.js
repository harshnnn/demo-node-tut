const {log} = require('console');
const {readFileSync,writeFileSync} = require('fs');

console.log("start")

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

writeFileSync(
    './content/output.txt',`this is the result : ${first}, ${second}`,{flag: 'a' }
    //flag a means file should be opened in append mode 
    // which means that if the file already exists,
    // the new content will be added to the end of the file rather than overwriting it.
)

console.log('done with this task');
console.log('starting the next one');


//We can start next function only after finishing all the tasks 