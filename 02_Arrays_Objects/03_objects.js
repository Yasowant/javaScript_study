//singleton

//object literals

const mySym = Symbol("key1")

const JsUser={
    name:"Yasowant",
    "fullName":"Yasowant Nayak",
    [mySym]: "mykey1",
    age:25,
    location:"Rourkela",
    email:"yasowant1998@gmail.com",
    isLoggedIn:false,
    lastLoginDays:['Monday',"saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["fullName"])
// console.log(JsUser[mySym])

// JsUser.email="yasowant@gmail.com";
// Object.freeze(JsUser)
// JsUser.email="yasowant2063@gmail.com";
// console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hi good mrng")
}

console.log(JsUser.greeting);

console.log(JsUser.greeting());


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo());