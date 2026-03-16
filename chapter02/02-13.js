let obj = {
    result: 0,
};

obj.add = function (a, b) {
    function inner() {
        this.result = a + b;
    }
    inner();
};

obj.add(2, 5);

console.log(obj);
console.log(result);

// { result: 0, add: [Function (anonymous)] }
// 7
