var logOdd = function (i) {
  console.log(i);
};

repeat(10, logOdd);

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    if (i % 2 != 0) {
      f(i);
    }
  }
}
