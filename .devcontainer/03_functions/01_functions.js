function sayMyName() {
    console.log("Yasowant");
}
sayMyName()

function addTwoNumber(number1, number2) {
    return number1 + number2
}
// console.log(addTwoNumber(4,5))

function loginUserMessage(username) {
    if (!username) {
        console.log("Please Enter a User Name")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Yasowant"))