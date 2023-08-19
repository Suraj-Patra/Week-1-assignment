const fs = require("fs");

function readingFile() {
    console.log("Before reading");
    
    // Reading file
    fs.readFile('./3-read-from-file.md', (err, data) => {
        if(err) console.log(err);
        else console.log(data+"");
    });
    
    console.log("After reading");
    let sum = 0;
    for(let i=1; i<=1000000000; i++) {
        sum += i;
    }
    console.log(sum);
}

readingFile();