const fs = require("fs");

function spaceCleaner(str) {
    // "\s" for spaces, "+" for all the spaces, replace with one space. 
    str = str.replace(/\s+/g, " ");
    return str;
}

function fileCleaner() {
    fs.readFile('./test1.txt', (err, data) => {
        if(err) {console.log(err); return;}
        data = data+"";
        data = spaceCleaner(data);
        fs.writeFile('./test1.txt', data, (err) => {
            if(err) console.log(err);
            else console.log("Cleaning successfull");
        })
    })
}

fileCleaner();