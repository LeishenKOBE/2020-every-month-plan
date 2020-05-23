var fib = function (N) {
    if (N === 0 || N === 1) return N;
    let preNum = 0, currNum = 1, index = 1, result;
    while (index !== N) {
        result = preNum + currNum;
        preNum = currNum;
        currNum = result;
        index++;
    }
    return currNum;
};