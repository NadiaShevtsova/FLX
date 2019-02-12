function reverseNumber(number) {
    let reversedNumber = Math.abs(number).toString().split('').reverse().join('');

    return number > 0 ? reversedNumber : -reversedNumber;
}

reverseNumber();