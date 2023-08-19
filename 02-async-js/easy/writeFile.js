const fs = require('fs');

function writingFile() {
    let data = "Writing content on the test file";
    fs.writeFile('./test.txt', data, (err)=>{
        if(err) console.log(err);
        else console.log("Writing succesfull!");
    })
}

writingFile();