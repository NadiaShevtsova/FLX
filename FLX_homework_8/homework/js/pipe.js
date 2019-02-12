function pipe(number) {
    let currentNumber = number;

    for (let i = 1; i < arguments.length; i++) {
        currentNumber = arguments[i](currentNumber);
    }
    return currentNumber;
}

function addOne(x) {
    return x + 1;
}
pipe(1, addOne, addOne, addOne);