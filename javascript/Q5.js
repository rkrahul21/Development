/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot
contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string. return true , else
return false .
Examples
"1234" --> true
"12345" --> false
"a234" --> false
*/

function validpin(pin){
    const fourdigitRegex = /(^[0-9]{4}$)/;
    const sixdigitRegex = /[0-9]{6}$/;

    const r1 = pin.match(fourdigitRegex);
    const r2 = pin.match(sixdigitRegex);

    if(r1 === null && r2 === null) return false;

    return true ;

    // return !(!r1 && !r2); //another method to return 
}


console.log(validpin("1234"));
console.log(validpin("12345"));
console.log(validpin("897r"));
console.log(validpin("697851"));



/*
Your task is simply to count the total number Of lowercase letters
in a string.
Examples
lowercaseCount(" abc ") ; == 3
lowercaseCount(" abcABtylu(123");== 7
*/

function lowercasecount(str){
   const ans = str.match(/[a-z]/g);
   return  ans.length ;
}

console.log(lowercasecount("abc"));
console.log(lowercasecount("$&%*&jhhgHYUW"));
console.log(lowercasecount("ajhHDJ989"));
console.log(lowercasecount("abc(/){ouit}[]"));

