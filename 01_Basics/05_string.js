const firstName="Yasowant";
const repoCount=50
console.log(firstName + repoCount);

 console.log(`My Name is ${firstName} and my repo count is ${repoCount}`)

 const gameName=new String("Yasowant");
 console.log(gameName);

 console.log(gameName[0])
 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2))
 console.log(gameName.indexOf(('t')))

 const newString=gameName.substring(0,4);
 console.log(newString);
 const anotherString=gameName.slice(-8,3);
 console.log(anotherString)

 const newStringOne ="  Yasowant  ";
 console.log(newStringOne)
 console.log(newStringOne.trim())

 const url = "https://yasowant.com/yasowant%20nayak"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //return true or false

console.log(gameName.split('-'));