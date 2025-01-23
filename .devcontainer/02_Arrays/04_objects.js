// const tinderUser=new Object();
const tinderUser = {}

tinderUser.id = "12345";
tinderUser.name = 'Yasowant';
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
    email: "Yasowant1998@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Yasowant",
            lastName: "Nayak"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstName);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3=Object.assign({},obj1,obj2)
const obj3 = { ...obj1, ...obj2 }
console.log(obj3)

const users = [
    {
        id: 1,
        email: "yasowant1998@gmail.com"
    },
    {
        id: 2,
        email: "yasowant19@gmail.com"
    }
]

users[1].email

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser));


const course={
    coursename:"Java",
    price:999,
    courseIns:"Yasowant"
}

const {courseIns}=course
console.log(courseIns)



