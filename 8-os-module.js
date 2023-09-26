const { log } = require('console');
const os = require('os');

const user = os.userInfo();
console.log(user.uid);

//method for system uptime

console.log(`The System uptime is ${os.uptime()} seconds`);


const currentOS = {
    name: os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOS);