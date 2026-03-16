let arr = [10, 20, 30, 40, 50];
let [value1, value2, value3] = arr;

console.log(value1 + ', ' + value2 + ', ' + value3);

let obj = {
    name: '박병욱',
    age: 29,
    gender: 'Male',
};

let { name: n, age: a, gender } = obj;
console.log(n, a, gender);

// 10, 20, 30
// 박병욱 29 Male
