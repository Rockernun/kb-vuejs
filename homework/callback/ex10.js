var sum = 0;

var add = function (i) {
  sum += i;
};

repeat(5, add);

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

console.log(sum);
