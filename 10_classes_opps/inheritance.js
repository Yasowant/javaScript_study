// Base User class
class User {
    constructor(username) {
        this.username = username; // Assign username
    }

    // Log user details
    logMe() {
        console.log(`User: ${this.username}`);
    }
}

// Teacher class extending User
class Teacher extends User {
    constructor(username, email, password) {
        super(username); // Call the parent class constructor
        this.email = email; // Assign email
        this.password = password; // Assign password
    }

    // Method to add a course
    addCourse(courseName) {
        console.log(`A new course "${courseName}" was added by ${this.username}.`);
    }
}

// Instantiate a teacher object
const teacher1 = new Teacher("johnDoe", "john@school.com", "securePassword123");

// Use the logMe method
teacher1.logMe(); // Logs: User: johnDoe

// Add a course
teacher1.addCourse("Mathematics"); // Logs: A new course "Mathematics" was added by johnDoe.

// Instantiate a user object
const student1 = new User("janeDoe");

// Use the logMe method
student1.logMe(); // Logs: User: janeDoe

// Check if teacher1 is an instance of User
console.log(teacher1 instanceof User); // true
