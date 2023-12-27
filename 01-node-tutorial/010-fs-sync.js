// const fs = require('fs');
const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first,second);
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'}
)
var text = ''
for(let i=0;i<10000;i++){
    text += `This is line ${i}\n`
}
writeFileSync(
    './content/big.txt',
    text,
    {flag: 'a'}
)