let arr = [1, 2, 3, 4, 5];
// let output = [];
// for(let i = 0; i<arr.length; i++){
//     let element = arr[i];
//     let result =  element*element;
//     output.push(result);
// }

// let result = arr.map((element) => {
//     return element*element;
// })

let result = arr.filter((Element) => {
    return Element > 3 ;
})

let isThere = arr.find(x => x>2); //only find one value..
console.log(result);
console.log(isThere);