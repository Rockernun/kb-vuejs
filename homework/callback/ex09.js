var arr = [];

var saveNumber = function (i) {
  arr.push(i);
};

repeat(5, saveNumber);

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

console.log(arr);
