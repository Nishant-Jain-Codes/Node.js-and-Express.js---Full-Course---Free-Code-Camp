const os = require('os');
//info about current user
console.log(os.userInfo());
//info about system uptime in seconds
console.log(os.uptime());   
//info about system
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);