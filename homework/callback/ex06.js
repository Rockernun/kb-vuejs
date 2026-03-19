var logMultipleOf3 = function (i) {
  console.log(i);
};

repeat(10, logMultipleOf3);

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    if (i % 3 == 0) {
      f(i);
    }
  }
}
