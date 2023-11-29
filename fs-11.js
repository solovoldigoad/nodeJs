const {writeFile, readFile} = require("fs")
console.log("start");
readFile("./contant/first.txt", "utf8",(err,result) =>{
    if(err){
        console.log(err);
        return;
    }
    const first = result; 

    readFile("./contant/second.txt", "utf8",(err,result) =>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;

        writeFile("./contant/result.txt" , `Hellow there : ${first} 
        ${second}` ,
        (err,result) =>{
            if(err){
                console.log(err);
            }
        console.log("do with the task");
        })
    })
})
console.log("stating next task")