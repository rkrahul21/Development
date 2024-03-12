/*
Q4 Write a function, persistence . that takes in a positive pararneter
num and returns its multiplicative persistence, which is the
number of times you must multiply the digits in nun until
reach a single digit.
persistence(39) = 3 
 3*9 = 27 , 2*7 = 14 , 1*4 = 4 
 total 3 step
*/



function persistence(num) {
    if (num < 10) 
       return 0;
    const strVersion = num.toString();
    const arrVersion = strVersion.split("");
    const multiplicationValue = arrVersion.reduce((acc,num) => acc *= num);

    if (multiplicationValue >= 10) {
    return 1 + persistence(multiplicationValue);
    }
    else {
    return 1;
    }
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));
