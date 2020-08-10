//Very powerfull array methods foreach,filter,map,reduce;
//They all interat over array and no need for loop
//We pass callback function either by declaring seperately or anonymous
//Filter and map return new array, reduce can return more than just array

//forEach

const names = ["John","Cristian","Bob"];

names.forEach(showName);

function showName(name){
    console.log(name);
}

//filter
const numbers = [0,1,2,3,4,5];
const even = numbers.filter(function(number){
    return number % 2 === 0;  
})
console.log("****************************");
console.log(`Even numbers are: ${even}`);
console.log("*****************************");
const big = numbers.filter(function(number){
    return number > 2;  
})
console.log(`Bigger than 2 numbers are: ${big}`);
console.log("*****************************");
//map -

const numbers2 = [0,1,2,3,4,5];
const timeTwo = numbers2.map(function(item){
    return item * 2;
})
const fullNames = names.map(function(item){
    return `${item} Manolache`;
})
console.log(timeTwo);
console.log(fullNames);

//reduce ---- recuces the value to a single value!!!

const fruits = ["Orange","Pear","Banana","Orange","Pear","Banana","Apple","Orange"];

const total = numbers.reduce(function(acc,curr){
    console.log(curr);
    acc = acc + curr;
    return acc;
},0)
console.log("*************************");

const distinct = fruits.reduce(function(acc,curr){
    console.log(curr);
    if(acc.indexOf(curr) === -1) {
        acc.push(curr);
    }
    return acc;
},[])
console.log(distinct);
console.log("*********************************");


const types = fruits.reduce(function(total,fruit){
    if(total[fruit]){
        total[fruit] += 1;
    }else {
        total[fruit] = 1;
    }
    return total;
},{})
console.log(types);
//Chaining array iterators

const sale = fruits.filter(function (fruit) {
    return fruit === "Orange";
}).map(function(name){
    return `${name} are on sale`;
})
console.log(sale);