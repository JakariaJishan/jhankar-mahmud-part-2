function loadData(){
    console.log(333);
}
console.log(222);
setTimeout(() => {
    loadData();
}, 1000);

setInterval(() => {
    console.log('hello');
}, 1000);