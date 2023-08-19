/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/



function wait(n) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("Resolved the promise!");
        }, n);
    })
}


/* With async-await */
async function test1() {
    const data = await wait(5000);
    console.log(data);
}


/* With then-catch */
async function test2() {
    wait(5000).then(data => {
        console.log(data);
    });
}



// console.log("Hello");
// test1();
// console.log("Byee!");