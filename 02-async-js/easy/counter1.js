function counter(endTime) {
    let count = 1;
    const id = setInterval(()=> {
        if(count===endTime) clearInterval(id);
        console.log(count);
        count++;
    }, 1000);
}

const endTime = 5;
counter(endTime);