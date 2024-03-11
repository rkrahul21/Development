/* 
Your goal in this kata is to implement a difference
function, which subtracts one list from another and
returns the result.
It should remove all values from list a , which are
present in list b.
*/

function Arrdiff(list1,list2){
    if(list1.length === 0) return [] ;

    if(list2.length === 0 ) return list1 ;
   
let newA = list1;
let newB = list2 ;

list1.forEach((arrItem, arrlndex) =>{
const aCopy = newA.slice();
const bCopy = newB.slice();
// We have found this element in both arrays
if (list2.includes(arrItem)){
newA = aCopy.filter(item =>item !== arrItem);
newB = bCopy.filter(item =>item !== arrItem);
}
})
// console. log(newA) ;
return newA;
}

console.log(Arrdiff([],[4,5]));
console.log(Arrdiff([1,2,3],[1]));
console.log(Arrdiff([8,69,45],[]));
console.log(Arrdiff([-8,-12,3,7],[4,5,19]));
