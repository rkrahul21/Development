// MAP function

const maparray = [2,5,8,9];
function mycustomcallback(itemfromarray){
    return itemfromarray *2 ;
}

const newarray = maparray.map(mycustomcallback);

console.log(newarray);

const strArray = ['hello','world','my','nameis','rahul'];

const newstrArray = strArray.map( item => {
   if((item.length%2) ==0) return 'even-length'
   else return 'odd-length';
});

console.log(newstrArray);
