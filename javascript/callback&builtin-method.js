// Array.pop() method returns last element from the array;
arr = [1,2,3,8,9,15]
console.log(arr.pop());
console.log(arr);

b =[1]
console.log(b.pop())  //undefined

// join() method 
const str = ['hello' , 'world'];
 const str2 = str.join();
console.log(str.join());
console.log(str2);
console.log(str.join("@"));

const s = "abcd efgh";
console.log(s.toUpperCase());

// includes() method 
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false


//CALLBACK FUNCTIONS

function mycallback(a){
    return a*2 ;
}

function mainFunction(randomnumber,shouldcall,callback){
 let result = randomnumber;
 if(shouldcall){
    result = callback(randomnumber);

 }

 return result;
}
//method-1
let ans =mainFunction(20,true,mycallback);

console.log(ans);

// we can pass a function as parameter
// method-2
let ans2 =mainFunction(Math.random(),true,(num)=> num*3); // function call
console.log(ans2);

// method-3
mainFunction(15,true,function(num){
   console.log(num*3);
   return;
})

