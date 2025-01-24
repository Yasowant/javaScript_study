//Immediately Invoked Function Expressions

// function demo(){
//     console.log(`DB connected`)
// }
// demo()


(function demo(){
    console.log(`DB connected`);
})();

(()=>{
    console.log(`Db connected two`);
    
})()