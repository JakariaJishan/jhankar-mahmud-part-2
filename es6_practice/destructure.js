const obj = {
    name: "jack",
    id: 33,
    info:{
        address : 'ecb chattar',
        phn: 76474
    }
}

const {address} = obj.info;
console.log(address);
console.log('hello');
//array destructure...

const arr = ['jack', 'mack', 'amma'];
const [first, ...older] = arr;
console.log(older);