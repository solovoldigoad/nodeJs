const {readFileSync , writeFileSync} = require("fs")
console.log("start");

const first = readFileSync("./contant/first.txt");
const second = readFileSync("./contant/second.txt");

writeFileSync("./contant/result.txt",`Here is the result : ${first} ${second}`)

console.log("done with the task")
console.log("starting with new one")

