function clock() {
    let hour, minute, second;
    const date = new Date();

    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    let clock_12 = `${hour>12?(hour-12):hour}:${minute}:${second}`;
    let clock_24 = `${hour}:${minute}:${second}`;
    console.log(`${clock_12}    |    ${clock_24}`);
}
function runClock() {
    console.log(`12'o clock |   24'o clock`);
    console.log(`-----------|-------------\n`);
    setInterval(() => {
        clock();
    }, 1000);
}
runClock();