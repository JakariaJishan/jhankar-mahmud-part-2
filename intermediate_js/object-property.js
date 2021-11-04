let name = [
    {name: 'jack', age : 32},
    {name: 'william', age : 22},
    {name: 'joe butler', age : 30}
]

// let arr = [];
// let output = name.map((ele) => {
//     let element = ele;
//     let result = element.name;
//     arr.push(result);

// })

let mapName = name.map((ele) => {
    return ele.name;
})
let mapAge = name.map((ele) => {
    return ele.age;
})
let filterAge = name.find((ele) => {
    return ele.age > 20;
})
console.log(mapName);
console.log(mapAge);
console.log(filterAge);