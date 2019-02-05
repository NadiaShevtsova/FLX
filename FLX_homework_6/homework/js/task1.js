let a, b, c, x;
let check = 0;
let D, x1, x2;
while (check!==1) {
    a = Number(prompt('Enter the first value (a)', 0));
    if (isNaN(a)) {
        alert('Invalid input data');
    } else{
        check=1;
    }
}
check = 0;
while (check!==1) {
    b = Number(prompt('Enter the first value (b)', 0));
    if (isNaN(b)) {
        alert('Invalid input data');
    } else{
        check=1;
    }
}
check = 0;
while (check!==1) {
    c = Number(prompt('Enter the first value (c)', 0));
    if (isNaN(c)) {
        alert('Invalid input data');
    } else{
        check=1;
    }
}

D = b * b - 4 * a * c;
if (D === 0) {
    x = (-b) / (2 * a);
    alert('x =' + x);
}

if(D > 0){
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    alert(' x1 =' + x1 + '/n' + 'x2 =' + x2);
}else {
    alert('no solution');
}
