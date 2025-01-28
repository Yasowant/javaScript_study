function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username,score){
    this.username=username;
    this .score=score;
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()



/*
What Happens Behind the Scenes When the `new` Keyword is Used:

1. A New Object is Created:
   - The `new` keyword creates a new JavaScript object.

2. Prototype Linking:
   - The new object is linked to the constructor function's prototype,
     allowing it to inherit properties and methods from the prototype.

3. Constructor Invocation:
   - The constructor function is called with `this` bound to the new object.
   - Any arguments are passed to the constructor function.

4. Return Value Determination:
   - If the constructor explicitly returns a non-primitive value (e.g., object, array, function),
     that value is returned.
   - Otherwise, the newly created object (`this`) is returned by default.
*/
