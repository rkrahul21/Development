/* A regular expression (regex for short) 
// allow developers to match strings against 
a pattern, extract submatch information, or 
simply test if the string conforms to that pattern*/

const emailregex = new RegExp('^.+@.+\..+$');
//$ shows that string is ended

const userinput = 'invalidmail.g' ;

const user = "valid@gmail.com";
const isvalid = emailregex.test(userinput);
const isvalid2 = emailregex.test(user);
console.log(isvalid+" "+isvalid2);

//identifiers , Quantifiers

// Regex is case sensetive
const regex = new RegExp('ing');

let s1 = "playing favorite game";
let s2 = "favorite ";

//it is looking for string have "ing"
console.log(regex.test(s1));
console.log(regex.test(s2));

// method 2 for regular expression 
const validRegex = /[a-zA-Z0-9]/ ;
console.log(validRegex.test(s1));

let s3 = "ACDEF"
let a = /[a-z0-9]/.test(s3);
console.log(a);

 let b = /[a-z ]{8}/.exec(s1); // 8 character from string
 console.log(b);