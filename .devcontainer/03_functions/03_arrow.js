//this:-it referes the current context

const user={
    userName:"Yasowant",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.userName},welcome to website`)
    }

}
// user.welcomeMessage()
// user.userName="Mayank"
// user.welcomeMessage()

// console.log(this)

// function demo(){
//     let username="Yaswoant"
//     console.log(this.username)
// }
// demo()

// const yash=function (){
//         let username="Yaswoant"
//     console.log(this.username)

// }


const chai=()=>{
    let userName="Yasowant"
    console.log(this)
}

// chai()


// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(6,7))


const addTwo=(num1,num2)=> num1+num2

console.log(addTwo(6,7))


const myArray=[2,4,4,5,32,3]
myArray.forEach(()=>{})

