// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.yasowant = function(){
    console.log(`yasowant is present in all objects`);
}

Array.prototype.heyYasowant = function(){
    console.log(`Yasowant says hello`);
}

// heroPower.yasowant()
// myHeros.yasowant()
// myHeros.heyYasowant()
// heroPower.heyYasowant()

// inheritance

const User = {
    name: "yasowant",
    email: "yasowant@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "YasowantNayak     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Yasowant".trueLength()
"iceTea".trueLength()