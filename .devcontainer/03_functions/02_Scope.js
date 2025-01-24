// var c=300;
let a = 300
if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("Inner:", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Yasowant"
    function two() {
        const website = "demo.dev"
        // console.log(username);

    }
    // console.log(website);
    two()
}
// one()


if(true){
    const userName="Yasowant"
    if(userName==="Yasowant"){
        const website="demo.dev"
        // console.log(userName + website)
    }
    // console.log(website)
}
// console.log(userName)


function addone(num){
    return num+1
}

addone(5)

const addTwo=function(num){
    return num+2
}
addTwo(5)



