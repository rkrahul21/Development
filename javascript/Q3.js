/*
Given: an array containing hashes of names
Return: a string formatted as a list of names separated by cornmas
except for the last two names, which should be separated by an
ampersand.
*/ 
function list(arr){
let finalString = '' ;
if (arr.length ===1) return arr[0].name;

arr.forEach((item,index)=>{
    const name = item.name ;
    if(index === arr.length -1){
        finalString = finalString+' & '+ name ;
    }
    else if(index === arr.length -2){
        finalString += name;
    }
    else{
        finalString = finalString+name +' , ';
    }
});
 return finalString;
}


const l1 = [{name:'Bart'},{name:'Lisa'},{name:'David'}];
const l2 = [{name:'Maggie'}];
console.log(list(l1) );
console.log(list(l2));
