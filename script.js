function fibonacci(n) {
  if (n <= 0) {
    return null;
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
}

module.exports = fibonacci;
