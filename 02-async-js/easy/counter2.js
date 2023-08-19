function counter(count, endTime) {
    if(count>endTime) return;
    console.log(count);
    setTimeout(()=>counter(count+1, endTime), 1000);
}

counter(1, 5);