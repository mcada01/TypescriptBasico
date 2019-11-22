var isPrime = function (n) {
    if (n === 2) {
        return n + " is Prime";
    }
    else if (n > 1) {
        for (var i = 2; i < n; i++) {
            if (n % i !== 0) {
                return n + " is Prime";
            }
            else if (n === i * i) {
                return n + " isn't Prime";
            }
            else {
                return n + " isn't Prime";
            }
        }
    }
    else {
        return n + " isn't Prime";
    }
};
console.log(isPrime(10));
