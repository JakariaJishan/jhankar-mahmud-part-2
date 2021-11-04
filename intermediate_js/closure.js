function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
let clock1 = stopWatch();
console.log(clock1());