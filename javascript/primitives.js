const s1 = new String('Hello world!');

const s2 = 'Hello world!' ;

//compares value and type of variable. in first
// case s1 is object where as s2 is string

console.log(s1===s2);  //false
console.log(s1==s2) ; // true
console.log("type of s1= "+typeof(s1) +"\ntype of s2 = "+typeof(s2));

//DATES

let dt = new Date();
console.log(dt.toString()); //convert into string 
  console.log(Date.now());
dt.toISOString() // time zone fomate
// let mnth = dt.getMonth() + 1 ;
console.log(dt.getDate()+"-"+(dt.getMonth() + 1)+"-"+
            dt.getFullYear());