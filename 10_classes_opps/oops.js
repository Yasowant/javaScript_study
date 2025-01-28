const user={
    userName:"Yasowant",
    loginCount:8,
    signedIn:true,
    getUserDetails:function (){
        // console.log("Got User Details from database")\
        // console.log(`username:${this.userName}`);
        console.log(this);
        
        
    }
}

// console.log(user.userName)
// console.log(user.getUserDetails())
// console.log(this)


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("Yasowant", 12, true)
const userTwo = new User("Mayank", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);
