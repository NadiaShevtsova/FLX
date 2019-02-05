let price, discount, priceWithDiscount, saved;
let check=0;
let ten=10;

while (check!==1) {
    price = Number(prompt('Enter the price in range 0 to 9999999', 0));
    if (price <= 0 || isNaN(price) || price > 9999999) {
        alert('Invalid data');
    } else{
        check=1;
    }
}
check=0;
while (check !== 1) {
    discount = Number(prompt('Enter the discount in range 0 to 99', 0));
    if (discount <= 0 || isNaN(discount) || discount > 99) {
        alert('Invalid data');
    } else {
        check = 1;
    }
}

saved = price * discount / 100;
priceWithDiscount = price - saved;

if (twoSign(price) > Math.floor(price)){
    if (twoSign(price) * 100 % ten === 0) {
        alert('Price without discount: ' + Math.floor(price * ten) / ten);//one number after comma
    } else {
        alert('Price without discount: ' + twoSign(price));//two number after comma
    }
} else {
    alert('Price without discount: '+ Math.floor(price));//number
}

if (twoSign(discount) > Math.floor(discount)){
    if (twoSign(discount) * 100 % ten === 0) {
        alert('Discount: ' + Math.floor(discount * ten) / ten);//one number after comma
    } else {
        alert('Discount: ' + twoSign(discount));//two number after comma
    }
} else {
    alert('Discount: '+ Math.floor(discount));//number
}

if (twoSign(priceWithDiscount) > Math.floor(priceWithDiscount)){
    if(twoSign(priceWithDiscount)*100%ten===0){
        alert('Price with discount: '+ Math.floor(priceWithDiscount*ten)/ten);//one number after comma
    }else{
        alert('Price with discount: '+ twoSign(priceWithDiscount));//two number after comma
    }
} else {
    alert('Price with discount: '+ Math.floor(priceWithDiscount));//number
}

if (twoSign(saved) > Math.floor(saved)){
    if(twoSign(saved)*100%ten===0){
        alert('Saved: '+ Math.floor(saved*ten)/ten);//one number after comma
    }else{
        alert('Saved: '+ twoSign(saved));//two number after comma
    }
} else {
    alert('Saved: '+ Math.floor(saved));//number
}

function twoSign(twoNumber){
    twoNumber = Math.floor(twoNumber*100)/100;
    return twoNumber;
}
