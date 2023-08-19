/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

/* With Date.now() */
// function calculateTime(n) {
//     let sum = 0;
//     let startTime = Date.now();
//     for(let i=1; i<=n; i++) sum += i;
//     let endTime = Date.now()

//     console.log(`Execution time : ${(endTime-startTime)/1000}sec`);
// }

/* With performance.now() --> more accuracy */
function calculateTime(n) {
    let sum = 0;
    let startTime = performance.now();
    for(let i=1; i<=n; i++) sum += i;
    let endTime = performance.now()

    console.log(`Execution time : ${(endTime-startTime)/1000} sec`);
}


calculateTime(1000000000);
// console.log(Date.now());