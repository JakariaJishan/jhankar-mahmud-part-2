let arr = [1,2,3,4,5,6,7,8];
// let part = arr.slice(2,3);
// console.log(part);

let removed = arr.splice(3, 2);
console.log(removed);
console.log(arr);
// let together = arr.join(",");
// console.log(together);

let arr2 = ["jack", "mack", "saka"];
let part2 = arr2.splice(0,1, "joe");
let together2 = arr2.join("mo");
console.log(part2);
console.log(arr2);
console.log(together2);