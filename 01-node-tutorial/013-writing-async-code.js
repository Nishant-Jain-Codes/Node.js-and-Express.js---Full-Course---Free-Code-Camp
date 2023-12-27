// ways of writing async code
// 1. callbacks 
/*

const {readFile , writeFile} = require('fs');
readFile('./content/first.txt','utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',`Here is the result : ${first} , ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
})

*/

// 2. using promises

const {readFile} = require('fs')
//1. creating custom function which returns a promise
const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}
//2 using the util module to promisify the readFile function
const {writeFile} = require('fs')
const util = require('util')
const writeFilePromise = util.promisify(writeFile)

//3 
// const {readFile , writeFile} = require('fs').promises

//this approach still didn't solve the callback hell problem
/*
getText('./content/first.txt')
    .then((result)=>console.log(result))
    .catch((err)=>console.log(err))
*/
//using async await
const start = async () =>{
    try{
        const first = await getText('./content/first.txt')
        const second = await getText('./content/second.txt')
        console.log(first,second)
        await writeFilePromise('./content/result-mind-grenade.txt',`This is awesome : ${first} , ${second} \n`, {flag:'a'})
    }
    catch(error){
        console.log(error)
    }
}
start()
