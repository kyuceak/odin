const fibonacci = function(n) {

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
    

};

// Do not edit below this line
module.exports = fibonacci;
