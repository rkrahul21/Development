/* Q ->  create a function that takes a list of
non-negative integers and strings and returns a new list
with the strings filtered out. */



function filter_list(numarr){
    return numarr.filter( item =>{
        if(item >= 0 && typeof item === "number") return true;

        else return false;
    })
}

const list = [1,2,'a','b',-98];

let ans = filter_list(list);
console.log(ans);