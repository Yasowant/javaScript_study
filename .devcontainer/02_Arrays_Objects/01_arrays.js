const array=[1,2,3,4,5,6,7,8,9];
// console.log(array);

const myFriends=["Yasowant","Mayank",'Zahira','Subhalaxmi']
// console.log(myFriends)

// array.push(10);
// console.log(array)
// array.pop();
// console.log(array)

// array.unshift(10);
// array.shift()
// console.log(array)

// console.log(array.includes(10));
// console.log(array.indexOf(8));
// console.log(array.indexOf(10));


//slice ,splice
//slice does not affect orginal array
//splice affeects the orginal array


console.log("A",array);
const myArray1=array.slice(1,4);
console.log(myArray1);
console.log("B",array);

const myArray2=array.splice(1,3);
console.log("c",array);
console.log(myArray2);







