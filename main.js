/*Task 1*/ 
let mycolors = ["Blue","Green","Red","Orange","Violet","Indigo","Yellow"];

mycolors.slice(2,4)
console.log(mycolors);

/*Task 2*/

let mynumber = [45,12,87,36];
console.log(mynumber)
function check(array, searchValue){
for(let x of array)
    if(x === searchValue)
        return true;

return false
}

console.log(check(mynumber,36));

/*Task 3*/

function check(array, searchNumber){
    let counter= 0; 
   for (let x of array) 
       if (x===searchNumber) 
           counter++;
   return counter;} 

let myarray = [45,12,45,78,63,95,2]
console.log(check(myarray, 45));
 
   