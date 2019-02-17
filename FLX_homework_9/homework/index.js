const three = 3, number1 = 1, number2 = 2, number3 = 3, number5 = 5, number8 = 8;

//task 1
function findType(...arg) {
    let arr = [...arg];
    let arrTypeOf = [];
    for (let i = 0; i < arr.length; i++) {
        arrTypeOf.push(typeof arr[i]);
    }

    return arrTypeOf;
}
console.log(findType(null, 5, 'hello'));

//task 2
let array = [number1, number2, number3];
executeForEach(array, function(el) {
    console.log(el);
});

function executeForEach(array, func) {
    let i = 0;
    for (i in array){
        if(array.hasOwnProperty(i)){
            func(array[i]);
        }
    }
}

//task 3
function mapArray(array, func){
    let transformedArray = [];
    executeForEach(array, function(el){
        transformedArray.push(func(el));
    });

    return transformedArray;
}
let arr = [number2, number5, number8];
console.log(mapArray(arr, function (el) {
    return el + three;
}));

//task 4
function filterArray(array, func){
    let filteredArray = [];
    executeForEach(array, function (el) {
        if(func(el)){
            filteredArray.push(el);
        }
    });

    return filteredArray;
}
console.log(filterArray(arr, function (el) {

    return el > three;
}));

//task 5
const data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'age': 39,
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'age': 38,
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'age': 2,
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'age': 19,
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

function getAmountOfAdultPeople(data) {
    let filterData = filterArray(data, function (el) {
        return el.age > 18;
    });
    return filterData.length;
}

console.log(getAmountOfAdultPeople(data));

//task 6
function getGreenAdultBananaLovers(data){
    let filterData = filterArray(data, function (el) {

        return el.age > 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green';
    });

    let mapData = mapArray(filterData, function (el) {

        return el.name;
    });

    return mapData;
}
console.log(getGreenAdultBananaLovers(data));

//task 7
const obj =
    {
        keyOne: 1,
        keyTwo: 2,
        keyThree: 3
    };

function keys(obj) {
    let arrayObjKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrayObjKeys.push(key);
        }
    }

    return arrayObjKeys;
}
console.log(keys(obj));

//task 8
function values(obj) {
    let arrayObjValues = [];
    for (let value in obj) {
        if (obj.hasOwnProperty(value)) {
            arrayObjValues.push(obj[value]);
        }
    }

    return arrayObjValues;
}
console.log(values(obj));

//task 9
function showFormattedDate (){
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date('2019-01-27T01:10:00');
    let monthIndex = date.getMonth();

    return `It is ${date.getDate()} of ${monthNames[monthIndex]}, ${date.getFullYear()}`;
}
console.log(showFormattedDate());

//task 10
function isEvenYear() {
    let date = new Date('2019-01-27T01:10:00');
    let year = date.getFullYear();
    let varTrue = true, varFalse = false;

    return year % 2 === 0 ? varTrue : varFalse;
}
console.log(isEvenYear());

//task 11
function isEvenMonth() {
    let date = new Date('2019-02-27T01:10:00');
    let month = date.getMonth() + 1;
    let varTrue = true, varFalse = false;

    return month % 2 === 0 ? varTrue : varFalse;
}
console.log(isEvenMonth());
