const plusCalculate1 = function (a, b) {
    return a + b;
};

const plusCalculate2 = (a, b) => {
    return a + b;
};

const plusCalculate3 = (a, b) => a + b;

console.log(plusCalculate1(2, 5));
console.log(plusCalculate2(2, 5));
console.log(plusCalculate3(2, 5));

// 7
// 7
// 7
